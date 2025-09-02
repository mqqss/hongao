import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="text-gray-900 bg-white">
      {/* 英雄区域 */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <img 
            src="/images/hero/hero-bg-technology.png" 
            alt="科技背景" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              专注于政企智能化解决方案
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mb-8">
              数据库一体化与AI智算融合，赋能治理现代化与产业升级
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/solutions" 
                className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300"
              >
                探索解决方案
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                联系我们
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 核心价值主张 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心价值主张</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center text-gray-700 mb-16">
            <p className="text-lg">
              陕西泓奥科技有限公司的核心价值主张建立在"政府信息化+AI智能化"双轮驱动的战略定位之上，致力于通过技术融合与价值创造，为政企客户提供智能化解决方案。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fa-solid fa-database text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">技术融合</h3>
              <p className="text-gray-600 text-center">
                实现数据库管理与AI智算能力的深度协同，打造安全、高效、智能的数据管理与应用平台。
              </p>
            </div>
            
  <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fa-solid fa-lightbulb text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">价值创造</h3>
              <p className="text-gray-600 text-center">
                推动治理模式现代化转型与产业数字化升级，形成技术赋能与价值实现的闭环体系。
              </p>
            </div>
            
  <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fa-solid fa-handshake text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">客户导向</h3>
              <p className="text-gray-600 text-center">
                聚焦政企客户需求，提供定制化解决方案，助力客户实现数字化转型与智能化升级。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 产品亮点 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心产品与服务</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden bg-blue-50">
                <img 
                  src="/images/products/database-server.png" 
                  alt="数据库一体机" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">数据库一体机</h3>
                <p className="text-gray-600 text-sm mb-4">
                  软硬一体的全栈性能引擎，计存融合架构，多引擎异构兼容。
                </p>
                <Link to="/products" className="text-blue-600 text-sm font-medium inline-flex items-center">
                  了解更多 <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                </Link>
              </div>
            </div>
            
            <div className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden bg-blue-50">
                <img 
                  src="/images/products/ai-dashboard.png" 
                  alt="AI智能查询" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">AI智能查询</h3>
                <p className="text-gray-600 text-sm mb-4">
                  对话式数据分析新范式，NL2SQL自然语言查询，智能报告一键生成。
                </p>
                <Link to="/products" className="text-blue-600 text-sm font-medium inline-flex items-center">
                  了解更多 <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                </Link>
              </div>
            </div>
            
            <div className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden bg-blue-50">
                <img 
                  src="/images/products/security-monitoring.png" 
                  alt="数据安全运维" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">数据安全运维</h3>
                <p className="text-gray-600 text-sm mb-4">
                  全流程闭环管理体系，事前预防、事中控制、事后追溯。
                </p>
                <Link to="/products" className="text-blue-600 text-sm font-medium inline-flex items-center">
                  了解更多 <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                </Link>
              </div>
            </div>
            
            <div className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden bg-blue-50">
                <img 
                  src="/images/products/storage-server.png" 
                  alt="高性能存储" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">高性能存储</h3>
                <p className="text-gray-600 text-sm mb-4">
                  极速数据访问支撑，RDMA高速数据传输，微秒级延迟响应。
                </p>
                <Link to="/products" className="text-blue-600 text-sm font-medium inline-flex items-center">
                  了解更多 <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/products" 
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              查看全部产品 <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 企业优势 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">企业优势</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="bg-gray-50 p-8 rounded-lg shadow-md relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <i className="fa-solid fa-users text-white"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">技术实力</h3>
                <p className="text-gray-600">
                  国内顶尖技术研发团队，具备丰富的政府与企业信息化实施经验，构建"自主研发+生态合作"的产品体系。
                </p>
              </div>
            </div>
            
  <div className="bg-gray-50 p-8 rounded-lg shadow-md relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <i className="fa-solid fa-handshake text-white"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">生态合作</h3>
                <p className="text-gray-600">
                  与中国移动、海康威视、海能达等行业领军企业深度合作，通过资源整合与优势互补，打造跨领域技术联盟。
                </p>
              </div>
            </div>
            
  <div className="bg-gray-50 p-8 rounded-lg shadow-md relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <i className="fa-solid fa-shield text-white"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">安全保障</h3>
                <p className="text-gray-600">
                  持有20+项安全资质，具备全产业链安全可控的信创能力，从底层芯片到上层应用实现自主技术覆盖。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 解决方案 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">行业解决方案</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img 
                  src="/images/solutions/government-digital.png" 
                  alt="政务领域解决方案" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-3">政务领域解决方案</h3>
                  <p className="text-blue-100 mb-4">
                    构建"数据资源整合-智能检索-政策辅助"全流程服务体系，通过智能化技术提升政务处理效率与决策科学性。
                  </p>
                </div>
                <Link 
                  to="/solutions" 
                  className="inline-flex items-center text-white font-medium mt-4 group"
                >
                  了解更多 <i className="fa-solid fa-arrow-right ml-2 group-hover:ml-3 transition-all"></i>
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img 
                  src="/images/solutions/finance-security.png" 
                  alt="金融领域解决方案" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-3">金融领域解决方案</h3>
                  <p className="text-gray-300 mb-4">
                    构建"事前预防-事中控制-事后追溯"的完整安全闭环管理体系，保障金融数据安全与合规管理。
                  </p>
                </div>
                <Link 
                  to="/solutions" 
                  className="inline-flex items-center text-white font-medium mt-4 group"
                >
                  了解更多 <i className="fa-solid fa-arrow-right ml-2 group-hover:ml-3 transition-all"></i>
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img 
                  src="/images/solutions/healthcare-analysis.png" 
                  alt="医疗健康解决方案" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-3">医疗健康解决方案</h3>
                  <p className="text-gray-300 mb-4">
                    通过"数据采集层-处理层-应用层"三层架构设计，实现体检服务全流程的智能化转型。
                  </p>
                </div>
                <Link 
                  to="/solutions" 
                  className="inline-flex items-center text-white font-medium mt-4 group"
                >
                  了解更多 <i className="fa-solid fa-arrow-right ml-2 group-hover:ml-3 transition-all"></i>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 合作伙伴 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">战略合作伙伴</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-80">
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src="/images/partners/china-mobile-logo.png" 
                alt="中国移动" 
                className="h-16 object-contain"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src="/images/partners/hikvision-logo.png" 
                alt="海康威视" 
                className="h-16 object-contain"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src="/images/partners/hainengda-logo.png" 
                alt="海能达" 
                className="h-16 object-contain"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src="/images/partners/dahua-logo.png" 
                alt="浙江大华" 
                className="h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">携手共创数字化未来</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            陕西泓奥科技期待与您合作，为政企客户提供数据库一体化与AI智算融合的智能化解决方案，赋能治理现代化与产业升级。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300"
            >
              联系我们
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;