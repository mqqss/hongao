import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* 404 数字 */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-8xl font-bold text-blue-600"
          >
            404
          </motion.div>

          {/* 错误图标 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-3-8h.01M12 20.01v.01"
                />
              </svg>
            </div>
          </motion.div>

          {/* 标题和描述 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-3xl font-bold text-gray-800">
              页面未找到
            </h1>
            <p className="text-gray-600 leading-relaxed">
              抱歉，您访问的页面不存在或已被移动。
              <br />
              请检查URL是否正确，或返回首页继续浏览。
            </p>
          </motion.div>

          {/* 操作按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="space-y-4"
          >
            <Link
              to="/"
              className="inline-block w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              返回首页
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-block w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-200"
            >
              返回上一页
            </button>
          </motion.div>

          {/* 导航链接 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="pt-6 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500 mb-4">或者访问以下页面：</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                to="/products"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                产品中心
              </Link>
              <Link
                to="/solutions"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                解决方案
              </Link>
              <Link
                to="/about"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                关于我们
              </Link>
              <Link
                to="/contact"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                联系我们
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}