import { useState } from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  // 定义产品分类类型
  type ProductCategory = 'aiInfrastructure' | 'database' | 'security' | 'storage';
  
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('aiInfrastructure');
  
  // 产品数据
  const productCategories = [
    { id: 'aiInfrastructure' as const, name: 'AI基础设施系列' },
    { id: 'database' as const, name: '数据库一体机系列' },
    { id: 'security' as const, name: '数据安全与运维系列' },
    { id: 'storage' as const, name: '存储与基础设施系列' }
  ];
  
  const products: Record<ProductCategory, Array<{
    id: number;
    name: string;
    subtitle: string;
    description: string;
    features: string[];
    image: string;
  }>> = {
    aiInfrastructure: [
      {
        id: 0,
        name: '行业智链驾驶平台',
        subtitle: 'MCP技术驱动的智能交互平台',
        description: '平台利用 MCP 技术，通过智能体添加后使用API或页面接入的技术实现各行业的智能搜索与对话，连接特定数据库或外部链接，支持动态工具发现与调用，采用混合传输模式提升交互效率，为政企提供更精准的行业数据搜索、查询和建议服务。',
        features: [
          '跨行业智能搜索与对话服务，高效连接数据库、知识库与外部链接',
          '动态工具发现与调用，提升数据交互效率',
          '内置安全机制，保障数据隐私与灵活部署能力'
        ],
        image: '/images/products/ai-platform-dashboard.png'
      }
    ],
    database: [
      {
        id: 1,
        name: 'HDM数据库一体机',
        subtitle: '国产化架构与自动化管理基石',
        description: '作为系列基础型产品，HDM数据库一体机系统平台 v2.1 以"国产化架构+自动化管理"为核心优势，深度融合国产先进硬件与智能管理软件，实现多引擎异构融合与全生命周期管理。',
        features: [
          '多引擎异构融合架构，兼容主流数据库生态',
          '自动化运维体系，覆盖部署、监控、升级全生命周期',
          '国产化软硬协同优化，满足关键信息基础设施安全要求'
        ],
        image: '/images/products/hdm-database.png'
      },
      {
        id: 2,
        name: 'HDA数据库一体机',
        subtitle: '计算存储一体化增强方案',
        description: 'HDA数据库一体机系统平台 v2.1 作为增强型产品，以"计算存储一体化"架构强化性能与可靠性，采用"计存融合"设计实现数据处理与存储资源的深度协同。',
        features: [
          '计算存储一体化架构，提升数据处理效率',
          '支持主流商业及国产数据库，兼容性强',
          '高性能、高可靠特性，承载大规模混合负载'
        ],
        image: '/images/products/hda-database.png'
      },
      {
        id: 3,
        name: 'HDAM数据库人工智能一体机',
        subtitle: 'AI赋能的对话式分析范式',
        description: 'HDAM数据库人工智能一体机平台 v2.1 作为系列AI型旗舰产品，通过NL2SQL技术实现自然语言到SQL查询的智能转换，真正实现"对话即数据分析"。',
        features: [
          'NL2SQL技术，自然语言到SQL查询的智能转换',
          '基于数据库大模型的语义理解能力',
          '问题拆解+查询过程可视化的二次验证机制'
        ],
        image: '/images/products/hdam-ai-database.png'
      }
    ],
    security: [
      {
        id: 4,
        name: 'HDBM数据库备份容灾一体机',
        subtitle: '数据高可用的核心支撑',
        description: 'HDBM数据库备份容灾一体机平台 v2.1 聚焦数据高可用目标，通过实时日志复制、任意时间点恢复及快照技术三大核心功能，构建起数据可靠性屏障。',
        features: [
          '秒级RPO（数据丢失≤5秒）',
          '分钟级RTO（业务恢复≤10分钟）',
          '一份数据、多场景应用能力，支持备份恢复、开发测试、数据分析'
        ],
        image: '/images/products/hdbm-backup.png'
      },
      {
        id: 5,
        name: 'HDBAMonitor数据库安全运维监控平台',
        subtitle: '全周期安全闭环构建',
        description: 'HDBAMonitor数据库安全运维监控管理平台 v2.1 以"事前预防-事中控制-事后追溯"为框架，构建数据库安全运维闭环体系。',
        features: [
          '支持30+主流数据库类型',
          '多维度性能监控，建立健康基线',
          '实时阻断SQL注入、越权访问等危险操作',
          '全量行为审计，生成可追溯的审计报告'
        ],
        image: '/images/products/hdbam-monitor.png'
      }
    ],
    storage: [
      {
        id: 6,
        name: 'HDSM分布式存储管理软件',
        subtitle: '高性能存储引擎',
        description: '泓奥HDSM分布式存储管理软件 v2.1 采用"硬件适配-网络优化-性能指标"三层协同设计，针对高性能计算场景实现存储能力的跨越式提升。',
        features: [
          'RDMA技术，实现数据在不同服务器内存间的直接传输',
          'RoCE协议栈，将RDMA技术与以太网融合',
          '微秒级数据访问延迟与超高IOPS',
          '支持数据库加速、AI训练支撑、大数据处理等场景'
        ],
        image: '/images/products/hdsm-storage.png'
      }
    ]
  };
  
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">产品中心</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            陕西泓奥科技围绕数据全生命周期管理需求，构建了四大核心产品/服务体系，以"核心能力-场景价值"双轮驱动企业数字化转型。
          </p>
        </div>
        
        {/* 产品分类标签 */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          {productCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as ProductCategory)}
              className={`px-6 py-3 rounded-full mx-2 transition-all duration-300 whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* 产品列表 */}
        <div className="space-y-16">
          {products[activeCategory].map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10 lg:w-3/5">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
                  <p className="text-blue-600 font-medium mb-4">{product.subtitle}</p>
                  <div className="prose prose-lg text-gray-700 mb-6 max-w-none">
                    <p>{product.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">核心特性</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <i className="fa-solid fa-check-circle text-blue-600 mt-1 mr-3"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href="https://alidocs.dingtalk.com/notable/share/form/v018K4nyeZMJ7oJznLb_dv19yqvsgs3oebp3pcjys_1qX0QQ0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    咨询详情 <i className="fa-solid fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;