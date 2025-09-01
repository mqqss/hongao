import { useState } from "react";
import { motion } from "framer-motion";

const Solutions = () => {
    const [activeSolution, setActiveSolution] = useState("government");

    const solutionCategories = [{
        id: "government",
        name: "政务领域"
    }, {
        id: "finance",
        name: "金融领域"
    }, {
        id: "healthcare",
        name: "医疗健康领域"
    }];

    const solutions = {
        government: {
            title: "政务领域解决方案",
            subtitle: "数据驱动决策，提升治理效能",
            description: "陕西泓奥科技有限公司政务领域解决方案以\"数据驱动决策\"为核心价值，构建\"数据资源整合-智能检索-政策辅助\"全流程服务体系，旨在通过智能化技术提升政务处理效率与决策科学性。",
            image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Government%20digitalization%20management%20system&sign=928f1fb02c67855a10ec84cc50626cf5",
            applicationScenarios: ["政府信息化系统建设", "政务数据管理与分析", "跨部门数据共享平台", "政策研究与制定辅助", "民生服务优化"],

            implementationProcess: [{
                step: 1,
                title: "数据采集与清洗",
                description: "深度适配政务数据库，通过标准化接口实现多源数据接入，结合数据校验与清洗机制，确保数据质量符合政务应用标准。"
            }, {
                step: 2,
                title: "智能检索",
                description: "依托多模态交互与语义理解技术，支持文本、表格、图像等多类型政务数据的精准查询，实现复杂需求的快速响应。"
            }, {
                step: 3,
                title: "政策建议生成",
                description: "基于法律法规知识库与历史案例分析，自动关联政策条文与实际场景，输出符合规范的高质量政策建议文本，辅助决策制定。"
            }],

            technicalArchitecture: "方案以\"DeepSeek大模型+行业智链驾驶平台\"为核心架构，融合基于DeepSeek的AI能力、政务数据智能检索、政策建议生成等关键技术。平台预置成熟行业智能体与知识库构建模块，支持快速部署与定制化配置。"
        },

        finance: {
            title: "金融领域解决方案",
            subtitle: "金融数据安全与合规保障体系",
            description: "陕西泓奥科技有限公司金融领域解决方案定位为\"金融数据安全与合规保障体系\"，重点覆盖银行、证券及支付机构等核心金融场景，旨在通过专业化技术手段解决金融行业数据安全与合规管理的核心痛点。",
            image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Financial%20data%20security%20system&sign=195770094a7effab4f7750657b0e0fa7",
            applicationScenarios: ["核心交易系统数据保护", "反洗钱监测", "虚拟货币交易监管", "金融合规审计", "风险预警与控制"],

            implementationProcess: [{
                step: 1,
                title: "事前预防",
                description: "通过风险预警机制识别潜在安全威胁，提前介入风险节点。"
            }, {
                step: 2,
                title: "事中控制",
                description: "实时监测异常交易行为，支持违规操作的即时阻断。"
            }, {
                step: 3,
                title: "事后追溯",
                description: "依托全量审计日志，实现交易行为的可追溯与合规审计。"
            }],

            technicalArchitecture: "方案整合两大自主研发平台能力：HDBAMonitor提供30+数据库审计功能，实现对金融核心数据库操作的全面监控与记录；HDBM则具备秒级恢复能力，在数据异常或故障时快速恢复业务连续性。"
        },

        healthcare: {
            title: "医疗健康解决方案",
            subtitle: "体检服务智能化升级",
            description: "陕西泓奥科技有限公司医疗健康解决方案以\"体检服务智能化升级\"为核心场景切入点，通过\"数据采集层-处理层-应用层\"三层架构设计，实现体检服务全流程的智能化转型。",
            image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Medical%20health%20data%20analysis%20system&sign=4cf32783a8a54f10de9ca0758f14b55e",
            applicationScenarios: ["公立医院体检中心", "专业健康管理机构", "企业员工健康管理", "社区健康服务中心", "远程健康监测"],

            implementationProcess: [{
                step: 1,
                title: "数据采集层",
                description: "整合多源体检数据，包括生理指标、影像资料及病史信息，实现结构化与非结构化数据的统一采集。"
            }, {
                step: 2,
                title: "标准化处理层",
                description: "通过数据清洗去重、格式统一、异常值处理等技术手段，将异构数据转化为标准化数据集。"
            }, {
                step: 3,
                title: "AI分析层",
                description: "基于DeepSeek大模型对标准化数据进行深度挖掘，实现健康风险评估与非专业术语解读。"
            }, {
                step: 4,
                title: "应用输出层",
                description: "根据AI分析结果生成个性化服务内容，包括定制化体检套餐推荐和健康干预方案。"
            }],

            technicalArchitecture: "方案的核心技术支撑来源于DeepSeek大模型分析与数据可视化技术的协同应用。DeepSeek大模型作为智能分析引擎，具备处理海量医学数据的能力，可通过迁移学习优化健康风险评估模型的准确率。"
        }
    };

    return (
        <div className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">解决方案</h1>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto">陕西泓奥科技专注于为政企客户提供数据库一体化与AI智算融合的智能化解决方案，赋能治理现代化与产业升级。
                                  </p>
                </div>
                {}
                <div className="flex flex-wrap justify-center mb-12 gap-2">
                    {solutionCategories.map(category => <button
                        key={category.id}
                        onClick={() => setActiveSolution(category.id)}
                        className={`px-6 py-3 rounded-full transition-all duration-300 ${activeSolution === category.id ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                        {category.name}
                    </button>)}
                </div>
                {}
                <motion.div
                    key={activeSolution}
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.5
                    }}
                    className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
                    {}
                    <div className="relative h-80 md:h-96 overflow-hidden">
                        <img
                            src={solutions[activeSolution].image}
                            alt={solutions[activeSolution].title}
                            className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                            <div className="p-8 text-white">
                                <h2 className="text-3xl font-bold mb-2">{solutions[activeSolution].title}</h2>
                                <p className="text-xl opacity-90">{solutions[activeSolution].subtitle}</p>
                            </div>
                        </div>
                    </div>
                    {}
                    <div className="p-8 md:p-10">
                        {}
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">方案概述</h3>
                            <div className="prose prose-lg text-gray-700 max-w-none">
                                <p>{solutions[activeSolution].description}</p>
                            </div>
                        </div>
                        {}
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">适用场景</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {solutions[activeSolution].applicationScenarios.map(
                                    (scenario, idx) => <div key={idx} className="bg-gray-50 p-4 rounded-lg flex items-center">
                                        <i className="fa-solid fa-building text-blue-600 mr-3 text-xl"></i>
                                        <span>{scenario}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        {}
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">实施流程</h3>
                            <div className="relative">
                                {}
                                {solutions[activeSolution].implementationProcess.length > 1 && <></>}
                                <div className="space-y-8">
                                    {solutions[activeSolution].implementationProcess.map((step, idx) => <div key={step.step} className="flex">
                                        <div className="flex-shrink-0 mr-4">
                                            <div
                                                className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold z-10">
                                                {step.step}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h4>
                                            <p className="text-gray-700">{step.description}</p>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                        {}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">技术架构</h3>
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                <p className="text-gray-700">{solutions[activeSolution].technicalArchitecture}</p>
                            </div>
                        </div>
                    </div>
                    {}
                    <div className="bg-gray-50 p-8 text-center border-t border-gray-100">
                        <h3 className="text-xl font-semibold mb-4">需要定制化解决方案？</h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">联系我们的专家团队，为您的企业量身定制专属解决方案
                                        </p>
                        <button
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">联系咨询专家 <i className="fa-solid fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Solutions;