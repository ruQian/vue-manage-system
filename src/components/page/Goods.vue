<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> {{pageLabel}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <!--div class="handle-box">
                <el-select v-model="GoodsQuery.topCategoryValue" placeholder="一级分类" class="handle-select mr10" @change="TopCategory">
                    <el-option
                    v-for="(item,index) in topCategoryData"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    ></el-option>
                </el-select>
                <el-select v-model="GoodsQuery.secCategoryValue" placeholder="二级分类" class="handle-select mr10" @change="SecCategory">
                </el-select>
            </div!-->
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                height="750"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >
                <el-table-column label="操作" width="70" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="id" label="商品ID"" width="60" align="center"></el-table-column>
                <el-table-column prop="category_id" label="商品分类ID"></el-table-column>
                <el-table-column prop="goods_sn" label="SN"></el-table-column>
                <el-table-column prop="name" label="商品名称"></el-table-column>
                <el-table-column prop="brand_id" label="品牌标识"></el-table-column>
                <el-table-column prop="goods_number" label="商品数量"></el-table-column>
                <el-table-column prop="keywords" label="关键字"></el-table-column>
                <el-table-column prop="goods_brief" label="商品简述"></el-table-column>
                <el-table-column prop="goods_desc" label="商品描述"></el-table-column>
                <el-table-column prop="is_on_sale" label="是否在售"></el-table-column>
                <el-table-column prop="add_time" label="添加时间"></el-table-column>
                <el-table-column prop="sort_order" label="顺序号"></el-table-column>
                <el-table-column prop="is_delete" label="是否删除"></el-table-column>
                <el-table-column prop="attribute_category" label="属性分类"></el-table-column>
                <el-table-column prop="counter_price" label="还价"></el-table-column>
                <el-table-column prop="is_new" label="是否是新品"></el-table-column>
                <el-table-column prop="goods_unit" label="附加价"></el-table-column>
                <el-table-column label="简要图(查看大图)" align="center">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="scope.row.primary_pic_url"
                            :preview-src-list="[scope.row.primary_pic_url]"
                        ></el-image>
                </template>
                </el-table-column>
                <el-table-column label="list_pic_url(查看大图)" align="center">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="scope.row.list_pic_url"
                            :preview-src-list="[scope.row.list_pic_url]"
                        ></el-image>
                </template>
                </el-table-column>
                <el-table-column prop="retail_price" label="零售价格"></el-table-column>
                <el-table-column prop="sell_volume" label="销售数量"></el-table-column>
                <el-table-column prop="primary_product_id" label="主要产品ID"></el-table-column>
                <el-table-column prop="unit_price" label="单价"></el-table-column>
                <el-table-column prop="promotion_desc" label="促销描述"></el-table-column>
                <el-table-column prop="promotion_tag" label="促销标签"></el-table-column>
                <el-table-column prop="app_exclusive_price" label="APP专用价格"></el-table-column>
                <el-table-column prop="is_app_exclusive" label="是否是APP专用的"></el-table-column>
                <el-table-column prop="is_limited" label="是否限购"></el-table-column>
                <el-table-column prop="is_hot" label="是否热卖"></el-table-column>

            </el-table>
                <div class="pagination">
                <el-pagination background layout="total, prev, pager, next" :current-page="query.pageIndex" :page-size="query.pageSize" :total="pageTotal" @current-change="handlePageChange"></el-pagination>
                </div>
        </div>

<!-- 编辑弹出框 -->
<!--el-dialog title="编辑" :visible.sync="editVisible" width="30%">
    <el-form ref="form" :model="form" label-width="70px">
        <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
            <el-input v-model="form.address"></el-input>
        </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
</el-dialog!-->
    </div>
</template>

<script>
    import {
        GetGoodsByIDApi
    } from '../../api/index';
    //all

    export default {
        //name: 'basetable',
        data() {
            return {
                GoodsQuery:{
                    topCategoryValue: '',
                    secCategoryValue: ''
                },
                query: {
                    pageSize: 1,
                    pageIndex: 10
                },
                tableData: [],
                pageTotal: 0,
                topCategoryData:[],
                secCategoryData:[],

                pageLabel:'',
                categoryId:''
            };
        },
        created() {
            this.pageLabel = this.$route.query.name;
            this.categoryId = this.$route.query.id;



            this.getData();
        },
        methods: {
            // 获取 easy-mock 的模拟数据
            getData() {
                console.log('getData');
                const role = localStorage.getItem('ms_usertoken');
                console.log(role);
                if (role) {
                    var paramsData = new Object();
                    paramsData["x-nideshop-token"] = role.toString();
                    paramsData["categoryId"] = this.categoryId;
                    GetGoodsByIDApi(paramsData).then(res => {
                        console.log(res);
                        this.tableData = res.data.data;
                        //this.pageTotal = res.pageTotal || 50;
                    });
                }
            },
            TopCategory(){
                console.log('TopCategory');
            },
            SecCategory(){
                console.log('SecCategory');
            },

            

            // 触发搜索按钮
            handleSearch() {
                this.$set(this.query, 'pageIndex', 1);
                this.getData();
            },
            // 删除操作
            handleDelete(index, row) {
                // 二次确认删除
                this.$confirm('确定要删除吗？', '提示', {
                        type: 'warning'
                    })
                    .then(() => {
                        this.$message.success('删除成功');
                        this.tableData.splice(index, 1);
                    })
                    .catch(() => {});
            },
            // 多选操作
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            delAllSelection() {
                const length = this.multipleSelection.length;
                let str = '';
                this.delList = this.delList.concat(this.multipleSelection);
                for (let i = 0; i < length; i++) {
                    str += this.multipleSelection[i].name + ' ';
                }
                this.$message.error(`删除了${str}`);
                this.multipleSelection = [];
            },
            // 编辑操作
            handleEdit(index, row) {
                this.idx = index;
                this.form = row;
                this.editVisible = true;
            },
            // 保存编辑
            saveEdit() {
                this.editVisible = false;
                this.$message.success(`修改第 ${this.idx + 1} 行成功`);
                this.$set(this.tableData, this.idx, this.form);
            },
            // 分页导航
            handlePageChange(val) {
                this.$set(this.query, 'pageIndex', val);
                this.getData();
            }
        }
    };
</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }
    
    .handle-select {
        width: 120px;
    }
    
    .handle-input {
        width: 300px;
        display: inline-block;
    }
    
    .table {
        width: 100%;
        font-size: 14px;
    }
    
    .red {
        color: #ff0000;
    }
    
    .mr10 {
        margin-right: 10px;
    }
    
    .table-td-thumb {
        display: block;
        margin: auto;
        width: 40px;
        height: 40px;
    }
</style>