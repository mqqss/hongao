import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">泓奥科技</h3>
            <p className="text-gray-400 text-sm">
              陕西泓奥科技是一家以“新锐科技企业，专注政企智能化”为核心定位的解决方案提供商。公司聚焦政府信息化与 AI 智能化领域，致力于通过技术创新赋能政企数字化转型。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">首页</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">产品中心</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">解决方案</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">关于我们</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">联系我们</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start">
                <i className="fa-solid fa-map-marker mt-1 mr-2"></i>
                <span>陕西省西安市曲江新区雁展路1111号莱安中心6幢11101室</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone mr-2"></i>
                <span>18192105077</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope mr-2"></i>
                <span>46256164@qq.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 陕西泓奥科技有限公司. 保留所有权利.
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="http://beian.miit.gov.cn/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-gray-400 text-sm flex items-center"
            >
              <i className="fa-solid fa-shield mr-1"></i>
              陕ICP备2025075685号
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;