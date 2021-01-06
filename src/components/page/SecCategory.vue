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
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                height="650"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >
                <!--el-table-column type="selection" width="55" align="center"></el-table-column!-->
                <el-table-column label="跳转"" width="150" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-lx-forward"
                            class="black"
                            @click="GoToGoodsHandler(scope.row.id, scope.row.name)"
                        >商品</el-button>
                    </template>
                </el-table-column>
                <el-table-column label="修改" width="70" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="id" label="类别ID"" width="60" align="center"></el-table-column>
                <el-table-column prop="name" label="类别名称"></el-table-column>
                <el-table-column prop="keywords" label="类别关键字"></el-table-column>
                <el-table-column prop="front_desc" label="类别描述"></el-table-column>
                <el-table-column prop="parent_id" label="父ID"></el-table-column>
                <el-table-column prop="sort_order" label="排序号"></el-table-column>
                <el-table-column prop="show_index" label="显示索引"></el-table-column>
                <el-table-column prop="is_show" label="是否显示"></el-table-column>
                <el-table-column label="banner_url(查看大图)" align="center">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="scope.row.banner_url"
                            :preview-src-list="[scope.row.banner_url]"
                        ></el-image>
                </template>
                </el-table-column>
                <el-table-column label="图标(查看大图)" align="center">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="scope.row.icon_url"
                            :preview-src-list="[scope.row.icon_url]"
                        ></el-image>
                </template>
                </el-table-column>
                <el-table-column label="图片(查看大图)" align="center">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="scope.row.img_url"
                            :preview-src-list="[scope.row.img_url]"
                        ></el-image>
                </template>
                </el-table-column>
                <el-table-column label="图片2(查看大图)" align="center">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="scope.row.wap_banner_url"
                            :preview-src-list="[scope.row.wap_banner_url]"
                        ></el-image>
                </template>
                </el-table-column>
                <el-table-column prop="level" label="分类级别"></el-table-column>
                <el-table-column prop="type" label="分类类型"></el-table-column>
                <el-table-column prop="front_name" label="front_name"></el-table-column>
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
        GetSecCategoryApi
    } from '../../api/index';
    //all

    export default {
        //name: 'basetable',
        data() {
            return {
                query: {
                    pageSize: 1,
                    pageIndex: 10
                },
                pageLabel : '二级类别',
                parentID : 0,
                tableData : [],
                pageTotal : 0,
                topCategoryData:[],
                secCategoryData:[]
            };
        },
        created() {
            this.pageLabel = this.$route.query.name;
            this.parentID = this.$route.query.id;
            console.log(this.pageLabel);
            this.getData();
        },
        methods: {
            //获取二级分类
            getData() {
                //console.log('getData');
                const role = localStorage.getItem('ms_usertoken');
                console.log(role);
                if (role) {
                    var paramsData = new Object();
                    paramsData["x-nideshop-token"] = role.toString();
                    paramsData["parentID"] = this.parentID;
                    GetSecCategoryApi(paramsData).then(res => {
                        console.log(res);
                        this.tableData = res.data;
                        //this.pageTotal = res.pageTotal || 50;
                    });
                }
            },
            


            // 触发搜索按钮
            handleSearch() {
                this.$set(this.query, 'pageIndex', 1);
                this.getData();
            },

            //跳转商品列表
            GoToGoodsHandler(id, name){
                console.log(id);
                console.log(name);
                this.$router.push({path:"/goods",query:{id:id, name:this.pageLabel + '-' +name}});
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