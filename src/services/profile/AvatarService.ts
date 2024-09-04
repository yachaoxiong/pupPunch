// import axios from 'axios';

// const BASE_URL = 'https://your-server.com'; // 替换为你的服务器地址

// // 上传头像
// export const uploadAvatar = async (uri: string) => {
//   const formData = new FormData();
//   formData.append('avatar', {
//     uri,
//     type: 'image/jpeg',
//     name: 'avatar.jpg',
//   });

//   try {
//     const response = await axios.post(`${BASE_URL}/upload-avatar`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Failed to upload avatar:', error);
//     throw error;
//   }
// };

// // 下载头像
// export const downloadAvatar = async (filePath: string) => {
//   try {
//     const response = await axios({
//       url: `${BASE_URL}/get-avatar`,
//       method: 'GET',
//       responseType: 'arraybuffer',
//     });
//     return response.data; // 返回下载的头像数据
//   } catch (error) {
//     console.error('Failed to download avatar:', error);
//     throw error;
//   }
// };
