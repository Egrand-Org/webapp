/**
 *	定义待办事项
 */

import axios from 'axios'
import { Toast } from 'mint-ui';

/**
 * 获取待办事项列表
 */
let getPage4Todo = () => {
	return new Promise((resolve, reject) => {
		axios.get("/api/v1/work/todo").then(function(result){
			resolve(result);
		}).catch(function(error){
			Toast(error);
		})
	})
}

export {getPage4Todo}
