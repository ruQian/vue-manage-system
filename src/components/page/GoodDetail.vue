<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 表单
                </el-breadcrumb-item>
                <el-breadcrumb-item>基本表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="150 px">
                    <el-form-item label="商品ID">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="商品分类ID">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="商品SN">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="商品名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="商品数量">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="关键字">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="商品简述">
                        <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="是否在售">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>

                    <el-form-item label="添加时间">
                        <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="顺序号">
                        <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="是否删除">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="属性分类">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="还价">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="是否是新品">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="单位">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="简要图">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="list_pic_url">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="零售价格">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="销售数量">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="主要产品ID">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="单价">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="促销描述">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="促销标签">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="APP专用价格">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="是否是APP专用">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="是否限购">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="是否热卖">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
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
export default {
    name: 'baseform',
    data() {
        return {
            options: [
                {
                    value: 'guangdong',
                    label: '广东省',
                    children: [
                        {
                            value: 'guangzhou',
                            label: '广州市',
                            children: [
                                {
                                    value: 'tianhe',
                                    label: '天河区'
                                },
                                {
                                    value: 'haizhu',
                                    label: '海珠区'
                                }
                            ]
                        },
                        {
                            value: 'dongguan',
                            label: '东莞市',
                            children: [
                                {
                                    value: 'changan',
                                    label: '长安镇'
                                },
                                {
                                    value: 'humen',
                                    label: '虎门镇'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'hunan',
                    label: '湖南省',
                    children: [
                        {
                            value: 'changsha',
                            label: '长沙市',
                            children: [
                                {
                                    value: 'yuelu',
                                    label: '岳麓区'
                                }
                            ]
                        }
                    ]
                }
            ],
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: true,
                type: ['步步高'],
                resource: '小天才',
                desc: '',
                options: []
            }
        };
    },
    methods: {
        onSubmit() {
            this.$message.success('提交成功！');
        }
    }
};
</script>