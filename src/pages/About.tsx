import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const aboutTabs = [
    { id: 'overview', name: '企业简介' },
    { id: 'history', name: '发展历程' },
    { id: 'team', name: '团队优势' },
    { id: 'honors', name: '荣誉资质' },
    { id: 'culture', name: '企业文化' },
    { id: 'partners', name: '合作伙伴' }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">关于我们</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            陕西泓奥科技有限责任公司成立于2024年，是一家以"新锐科技企业，专注政企智能化"为核心定位的解决方案提供商。
          </p>
        </div>

        {/* 关于我们标签页 */}
        <div className="mb-10">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex flex-wrap">
              {aboutTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`mr-1 py-4 px-1 border-b-2 font-medium text-sm focus:outline-none transition-all duration-300 ${activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  <span className="px-3">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* 标签页内容 */}
          <div className="py-8">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">企业简介</h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      陕西泓奥科技有限责任公司成立于 2024 年，是一家以“新锐科技企业，专注政企智能化”为核心定位的解决方案提供商。公司聚焦政府信息化与 AI 智能化领域，致力于通过技术创新赋能政企数字化转型。
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">核心定位</h3>
                    <p>
                      聚焦政府与企业智能化需求，打造差异化技术服务能力。
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">业务布局</h3>
                    <p>
                      公司构建了"核心业务+延伸业务"的双轮驱动体系。核心业务涵盖数据库专有云一体机研发销售、人工智能技术应用及软件开发，旨在通过自主技术研发突破政企智能化建设的关键技术瓶颈；延伸业务则包括物联网、大数据、智能设备及网络设备销售，形成对核心业务的协同支撑，构建完整的智能化服务生态。
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">未来展望</h3>
                    <p>
                      陕西泓奥科技将持续深化技术创新，以"推动治理现代化与社会智能化"为双重价值导向，为政府及企业客户提供更具前瞻性的智能化解决方案，助力实现高效治理与社会智慧化发展。
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/about/office-environment.png"
                    alt="企业环境"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">核心价值主张</h3>
                    <p className="text-gray-700 mb-4">
                      专注于为政企客户提供数据库一体化与AI智算融合的智能化解决方案，赋能治理现代化与产业升级。
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center text-blue-600">
                        <i className="fa-solid fa-lightbulb mr-2"></i>
                        <span className="font-medium">技术融合</span>
                      </div>
                      <div className="flex items-center text-blue-600">
                        <i className="fa-solid fa-rocket mr-2"></i>
                        <span className="font-medium">价值创造</span>
                      </div>
                      <div className="flex items-center text-blue-600">
                        <i className="fa-solid fa-shield mr-2"></i>
                        <span className="font-medium">安全可控</span>
                      </div>
                      <div className="flex items-center text-blue-600">
                        <i className="fa-solid fa-users mr-2"></i>
                        <span className="font-medium">合作共赢</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}

            {activeTab === 'history' && (<div className="relative">
              {/* 时间线 */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2 ml-6"></div>

              <div className="space-y-10">
                <div className="relative flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold z-10">
                    2024
                  </div>
                  <div className="ml-6 md:ml-10 flex-1">
                    <h3 className="text-xl font-semibold mb-2">奠基之年——战略启航与团队组建</h3>
                    <p className="text-gray-700">
                      公司正式成立，确立"聚焦政企信息化与AI智能化"的核心发展方向，同步组建由行业资深专家与技术骨干构成的专业团队，为技术研发与市场拓展奠定坚实基础。
                    </p>
                  </div>
                </div>

                <div className="relative flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold z-10">
                    2025
                  </div>
                  <div className="ml-6 md:ml-10 flex-1">
                    <h3 className="text-xl font-semibold mb-2">技术突破——核心产品获权威认证</h3>
                    <p className="text-gray-700">
                      公司自主研发的核心产品"行业智链驾驶平台"成功获得国家软件著作权（登记号：2025SR1189990），标志着其在AI智能化技术应用领域的研发实力获得权威认可，为业务落地提供关键技术支撑。
                    </p>
                  </div>
                </div>

                <div className="relative flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold z-10">
                    2026
                  </div>
                  <div className="ml-6 md:ml-10 flex-1">
                    <h3 className="text-xl font-semibold mb-2">全国化战略布局</h3>
                    <p className="text-gray-700">
                      为持续扩大市场影响力，公司计划于2026年启动全国化拓展，重点布局3个核心区域市场，通过技术输出与本地化服务结合的模式，将"行业智链驾驶平台"的应用价值辐射至更多政企客户，推动行业数字化转型进程。
                    </p>
                  </div>
                </div>
              </div>
            </div>)}

            {activeTab === 'team' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">人才-研发-实施 三维能力体系</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <i className="fa-solid fa-user-graduate text-blue-600 text-2xl"></i>
                    </div>
                    <h4 className="text-lg font-semibold mb-3">顶尖人才与经验沉淀</h4>
                    <p className="text-gray-700">
                      核心成员由国内顶尖技术研发人才构成，具备深厚的技术积累与丰富的行业实践经验，技术领域分布覆盖数据库、人工智能、网络安全等核心方向。
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <i className="fa-solid fa-flask text-blue-600 text-2xl"></i>
                    </div>
                    <h4 className="text-lg font-semibold mb-3">内研外合的研发体系</h4>
                    <p className="text-gray-700">
                      研发投入采用"内研+外合"的协同模式，内部持续加大核心技术攻关力度，外部与众多科研机构、企业及政府建立紧密合作关系。
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <i className="fa-solid fa-cogs text-blue-600 text-2xl"></i>
                    </div>
                    <h4 className="text-lg font-semibold mb-3">全链路交付实施能力</h4>
                    <p className="text-gray-700">
                      构建从需求分析到部署运维的一体化服务体系，具备覆盖项目全生命周期的技术实施能力，确保产品从设计到交付的每个环节均达到高质量标准。
                    </p>
                  </div>
                </div>
              </div>)}

            {activeTab === 'honors' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-semibold mb-6">知识产权成果</h3>
                  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                    <div className="flex gap-6">
                      <div className="flex-1">
                        <div className="flex items-start mb-4">
                          <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg mr-4">
                            <i className="fa-solid fa-certificate text-blue-600 text-2xl"></i>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-1">行业智链驾驶平台 V1.0</h4>
                            <p className="text-gray-500 text-sm mb-2">国家软件著作权</p>
                            <p className="text-gray-700 text-sm">登记号：2025SR1189990</p>
                            <p className="text-gray-700 text-sm">登记时间：2025年7月8日</p>
                          </div>
                        </div>
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 text-sm">
                            该证书由中华人民共和国国家版权局正式颁发，标志着公司在智能驾驶领域的技术成果获得国家权威认可。
                          </p>
                        </div>
                      </div>
                      <div className="flex-shrink-0 w-32">
                        <img
                          src="/images/about/ruanzhu.png"
                          alt="软件著作权证书"
                          className="w-full h-40 object-contain bg-gray-50 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6">安全认证资质</h3>
                  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-gray-700 font-medium">安全资质认证总数</span>
                      <span className="text-3xl font-bold text-blue-600">20+</span>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <i className="fa-solid fa-check text-blue-600 text-xs"></i>
                        </div>
                        <span className="ml-3 text-gray-700">信息系统安全等级保护三级</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <i className="fa-solid fa-check text-blue-600 text-xs"></i>
                        </div>
                        <span className="ml-3 text-gray-700">ISO 27001信息安全管理体系认证</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <i className="fa-solid fa-check text-blue-600 text-xs"></i>
                        </div>
                        <span className="ml-3 text-gray-700">ITSS信息技术服务标准认证</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <i className="fa-solid fa-check text-blue-600 text-xs"></i>
                        </div>
                        <span className="ml-3 text-gray-700">CCRC信息安全服务资质</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <i className="fa-solid fa-ellipsis text-gray-400 text-xs"></i>
                        </div>
                        <span className="ml-3">及其他16+项安全相关资质认证</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}

            {activeTab === 'culture' && (
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                  <div>
                    <h3 className="text-xl font-semibold mb-6">核心价值观</h3>

                    <div className="space-y-6">
                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-1">合作（生态协同）</h4>
                          <p className="text-gray-700">
                            通过构建开放的产业生态网络实现资源整合，推动技术成果与产业需求的精准对接，形成"研发-转化-应用"的协同闭环。
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-1">创新（技术突破）</h4>
                          <p className="text-gray-700">
                            以技术研发为核心竞争力，在自然语言处理领域实现关键突破，如自主研发的NL2SQL技术，大幅降低政企客户数据分析门槛。
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-1">诚信（合规经营）</h4>
                          <p className="text-gray-700">
                            将合规管理贯穿业务全流程，建立ISO 27001信息安全管理体系与数据隐私保护机制，确保客户数据全生命周期安全可控。
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-bold">4</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-1">共赢（客户价值）</h4>
                          <p className="text-gray-700">
                            以客户成功为终极目标，通过定制化需求调研与迭代开发，帮助客户实现效率提升与满意度提高，实现企业与客户的价值共生。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-6">经营理念</h3>

                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 mb-6">
                      <h4 className="text-lg font-medium mb-3">客户至上，品质第一</h4>
                      <p className="text-gray-700 mb-4">
                        "客户至上，品质第一"的经营理念通过"高质量交付"机制落地，公司建立覆盖需求分析、研发测试、部署运维的全流程质量管控体系。
                      </p>
                      <div className="bg-white p-4 rounded-md">
                        <p className="text-gray-700 italic">
                          "在某央企数字化转型项目中，通过组建专项交付团队，实施敏捷开发与多轮压力测试，最终实现系统上线零故障，兑现'使产品高质量交付'的核心承诺，客户续约率提升至92%。"
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-900 text-white rounded-lg p-6 text-center">
                      <h4 className="text-xl font-bold mb-2">文化标语</h4>
                      <p className="text-lg">以技术创新服务政企，以诚信合作共赢未来</p>
                    </div>
                  </div>
                </div>
              </div>)}

            {activeTab === 'partners' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">战略生态-技术赋能-场景落地 三位一体合作伙伴体系</h3>

                <div className="space-y-10">
                  <div>
                    <h4 className="text-lg font-medium mb-4 text-gray-700">战略生态合作伙伴</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-lg shadow-md p-6 flex items-center hover:shadow-lg transition-shadow duration-300">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                          <img
                            src="/images/partners/china-mobile-logo.png"
                            alt="中国移动"
                            className="w-16 h-16 object-contain"
                          />
                        </div>
                        <div>
                          <h5 className="text-lg font-medium mb-1">中国移动</h5>
                          <p className="text-gray-700 text-sm">
                            依托中国移动在5G、云计算及大数据领域的技术优势，构建算网产品体系支撑，为公司业务发展提供底层战略资源保障。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-4 text-gray-700">技术赋能合作伙伴</h4>
                    <div className="grid grid-cols-3 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-lg shadow-md p-6 flex items-center hover:shadow-lg transition-shadow duration-300">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                          <img
                            src="/images/partners/megvii-logo.png"
                            alt="旷视科技"
                            className="w-16 h-16 object-contain"
                          />
                        </div>
                        <div>
                          <h5 className="text-lg font-medium mb-1">旷视科技</h5>
                          <p className="text-gray-700 text-sm">
                            融合旷视科技领先的视觉AI技术，共同开发高精度场景化解决方案，通过视觉技术与业务场景的深度融合。
                          </p>
                        </div>
                      </div>
                    <div className="bg-gray-50 rounded-lg shadow-md p-6 flex items-center hover:shadow-lg transition-shadow duration-300">
                          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                            <img
                              src="/images/partners/hikvision-logo.png"
                              alt="海康威视"
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                          <div>
                            <h5 className="text-lg font-medium mb-1">海康威视</h5>
                            <p className="text-gray-700 text-sm">
                              联合海康威视开发智能安防解决方案，推动安防技术在多行业的应用拓展，实现从技术研发到行业落地的闭环。
                            </p>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg shadow-md p-6 flex items-center hover:shadow-lg transition-shadow duration-300">
                          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                            <img
                              src="/images/partners/dahua-logo.png"
                              alt="浙江大华"
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                          <div>
                            <h5 className="text-lg font-medium mb-1">浙江大华</h5>
                            <p className="text-gray-700 text-sm">
                              携手浙江大华深化视频监控与智能分析技术的应用，为行业客户提供高效的视频数据处理方案。
                            </p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;