<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> {{pageLabel}}
                </el-breadcrumb-item>
                <!--el-breadcrumb-item>基本表单</el-breadcrumb-item!-->
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" size="small" label-width="80px">
                    <!--el-form-item label="商品ID" :label-width="formLabelWidth" style="width: 45%;">
                        <el-input v-model="goodData.id" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商品分类ID" :label-width="formLabelWidth" style="width: 45%;">
                        <el-input v-model="goodData.category_id"></el-input>
                    </el-form-item>
                    <el-form-item label="商品SN" :label-width="formLabelWidth" style="width: 45%;">
                        <el-input v-model="goodData.goods_sn"></el-input>
                    </el-form-item!-->
                    <el-form-item label="商品名称">
                        <el-input v-model="goodData.name"></el-input>
                    </el-form-item>
                    <!--el-form-item label="品牌标识">
                        <el-input v-model="goodData.brand_id"></el-input>
                    </el-form-item!-->
                    <el-form-item label="商品数量">
                        <el-input v-model="goodData.goods_number"></el-input>
                    </el-form-item>
                    <!--el-form-item label="关键字">
                        <el-input v-model="goodData.keywords"></el-input>
                    </el-form-item!-->
                    <el-form-item label="商品简述">
                        <el-input type="textarea" rows="5" v-model="goodData.goods_brief"></el-input>
                    </el-form-item>
                    <!--el-form-item label="是否在售">
                        <el-input v-model="goodData.is_on_sale"></el-input>
                    </el-form-item!-->

                    <!--el-form-item label="添加时间">
                        <el-input type="textarea" rows="5" v-model="goodData.add_time"></el-input>
                    </el-form-item>
                    <el-form-item label="顺序号">
                        <el-input type="textarea" rows="5" v-model="goodData.sort_order"></el-input>
                    </el-form-item>
                    <el-form-item label="是否删除">
                        <el-input v-model="goodData.is_delete"></el-input>
                    </el-form-item!-->
                    <el-form-item label="属性分类">
                        <el-input v-model="goodData.attribute_category"></el-input>
                    </el-form-item>
                    <el-form-item label="还价">
                        <el-input v-model="goodData.counter_price"></el-input>
                    </el-form-item>
                    <!--el-form-item label="是否是新品">
                        <el-input v-model="goodData.is_new"></el-input>
                    </el-form-item!-->
                    <el-form-item label="单位">
                        <el-input v-model="goodData.goods_unit"></el-input>
                    </el-form-item>
                    <el-form-item label="简要图">
                        <!--el-input v-model="goodData.primary_pic_url"></el-input!-->
                        
                    <el-upload
                        class="upload-demo"
                        ref="upload"
                        action=""
                        accept="image/png"
                        list-type="picture-card"
                        :before-upload="onBeforeUploadImage"
                        limit = "parseInt('1')"
                        :http-request="UploadImage"
                        :on-change="fileChange"
                        >
                        <el-image
                            class="table-td-thumb"
                            :src="goodData.primary_pic_url"
                        ></el-image>
                    </el-upload>
                    <!--el-upload
                    class="upload-demo"
                    ref="upload"
                    drag
                    action="string"
                    multiple
                    :before-upload="onBeforeUploadImage"
                    :http-request="UploadImage"
                    :on-change="fileChange">
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload!-->
                    </el-form-item>
                    <el-form-item label="list_pic_url">
                        <el-upload
                        class="upload-demo"
                        ref="upload"
                        action="string"
                        accept="image/png"
                        list-type="picture-card"
                        :before-upload="onBeforeUploadImage"
                        :http-request="UploadImage"
                        :on-change="fileChange"
                        >
                        <el-image
                            class="table-td-thumb"
                            :src="goodData.list_pic_url"
                        ></el-image>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="零售价格">
                        <el-input v-model="goodData.retail_price"></el-input>
                    </el-form-item>
                    <el-form-item label="销售数量">
                        <el-input v-model="goodData.sell_volume"></el-input>
                    </el-form-item>
                    <!--el-form-item label="主要产品ID">
                        <el-input v-model="goodData.primary_product_id"></el-input>
                    </el-form-item!-->
                    <el-form-item label="单价">
                        <el-input v-model="goodData.unit_price"></el-input>
                    </el-form-item>
                    <!--el-form-item label="促销描述">
                        <el-input v-model="goodData.promotion_desc"></el-input>
                    </el-form-item>
                    <el-form-item label="促销标签">
                        <el-input v-model="goodData.promotion_tag"></el-input>
                    </el-form-item>
                    <el-form-item label="APP专用价格">
                        <el-input v-model="goodData.app_exclusive_price"></el-input>
                    </el-form-item>
                    <el-form-item label="是否是APP专用">
                        <el-input v-model="goodData.is_app_exclusive"></el-input>
                    </el-form-item>
                    <el-form-item label="是否限购">
                        <el-input v-model="goodData.is_limited"></el-input>
                    </el-form-item>
                    <el-form-item label="是否热卖">
                        <el-input v-model="goodData.is_hot"></el-input>
                    </el-form-item!-->
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">保存</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        SortGoodApi
    } from '../../api/index';
    import {
        UploadImageApi
    } from '../../api/index';
    export default {
    data() {
        return {
            goodData: [],
            pageLabel:'',
            categoryId:'',
            form: {

            },
            fileList: [],
            };
        },
        created() {
            this.pageLabel = this.$route.query.name;
            this.goodData = this.$route.query.data;
            //this.getData();
        },
    methods: {            
        onSubmit() {
            //this.$message.success('提交成功！');
            //保存商品详情
            console.log('提交商品数据');
                const role = localStorage.getItem('ms_usertoken');
                console.log(role);
                if (role) {
                    var paramsData = new Object();
                    paramsData["x-nideshop-token"] = role.toString();
                    paramsData["data"] = this.goodData;
                    SortGoodApi(paramsData).then(res => {
                        console.log(res);
                        //this.pageTotal = res.pageTotal || 50;
                        if(res.errno == 0)
                        {
                            this.$message.success('提交成功！');
                        }
                    });
                }


        },
        
        onBeforeUploadImage(file) {
                const isIMAGE = file.type === 'image/png'
                const isLt1M = file.size / 1024 / 1024 < 1
                if (!isIMAGE) {
                    this.$message.error('只能上传png格式文件')
                }
                if (!isLt1M) {
                    this.$message.error('上传文件大小不能超过 1MB!')
                }
                return isIMAGE && isLt1M
                },
        UploadImage(param){
                var paramsData = new FormData();
                console.log(param.file.name);
                console.log(param);
                
                
                paramsData["name"] = param.file.name;
                paramsData["body"] = param.file;

                //paramsData['name'] = param.file.name;
                //paramsData['body'] = param.file;
                UploadImageApi(paramsData).then(response => {
                    console.log('上传图片成功')
                    //param.onSuccess()  // 上传成功的图片会显示绿色的对勾
                    // 但是我们上传成功了图片， fileList 里面的值却没有改变，还好有on-change指令可以使用
                }).catch(response => {
                    console.log('图片上传失败')
                    //param.onError()
                })
                },
        fileChange(file){
                this.$refs.upload.clearFiles() //清除文件对象
                this.logo = file.raw // 取出上传文件的对象，在其它地方也可以使用
                this.fileList = [{name: file.name, url: file.url}] // 重新手动赋值filstList， 免得自定义上传成功了, 而fileList并没有动态改变， 这样每次都是上传一个对象
                },

    }
};
</script>