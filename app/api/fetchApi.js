import axios from "axios";

const local='http://localhost:8080';
export const src=`http://localhost:8080/public/img`;
export const axiosWithAuth=axios.create({
  baseURL:`${local}`,
  timeout:180_000,
})

axiosWithAuth.interceptors.request.use(
  (config)=>{
    config.headers.token='asdasdasd';

    return config;
  },
  (e)=>{
    return Promise.reject(e)
  }
)




export async function getDataCate(){
    const res=await fetch(`${local}/categories`,{cache:'no-cache'});
    return res.json();
  }
  //  add cate
  export async function addDataCate(model){
    const res=await axios.post(`${local}/post-categories`,model,{cache:'no-cache'});
    return res.data;
  }
  // chỉnh sửa cate

  export async function putDataCate(model,id){
    console.log(model,id);
    const res=await axios.put(`${local}/put-categories/${id}`,model,{cache:'no-cache'});
    return res.data;
  }
  export async function deleteDataCate(id){
   
    const res=await axios.put(`${local}/delete-categories/${id}`,{cache:'no-cache'});
    return res.data;
  }
export async function getDataProducts(){
    const res=await fetch(`${local}/products`,{cache:'no-cache'});
    return res.json();
  }
export async function getHotDataProducts(){
    const res=await fetch(`${local}/products-hot`,{cache:'no-cache'});
    return res.json();
  }
export async function getDiscountDataProducts(){
    const res=await fetch(`${local}/products-discount`,{cache:'no-cache'});
    return res.json();
  }
export async function getDiscountDataProductsByIdCate(idCate,num){
  if(num==0){
     const res=await fetch(`${local}/product-discount-by-id/${idCate}/0`,{cache:'no-cache'});
    return res.json();
  }else{
    const res=await fetch(`${local}/product-discount-by-id/${idCate}/1`,{cache:'no-cache'});
    return res.json();
  }
   
  }
export async function getDataProductsByCate(idCate){
    const res=await fetch(`${local}/productbycate/${idCate}`,{cache:'no-cache'});
    return res.json();
  }
  
  
  export async function getDataProductsById(id) {
    try {
      const res = await axiosWithAuth.get(`/product-detail/${id}`,{ cache: 'no-cache'});
      return res.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle other error cases here
      throw error; // Propagate the error
    }
  }
export async function getSearchProduct(key){
  const res=await axios.get(`${local}/search/${key}`,{cache:'no-cache'});
    return res.data;
}

export async function loginAPI(model) {
  try {
      const response = await axios.post(`${local}/log-in`, model,{cache:'no-cache'});
      return response.data; // Trả về dữ liệu từ phản hồi của API
  } catch (error) {
      throw error; // Ném lỗi nếu có lỗi xảy ra trong quá trình gọi API
  }
}
export async function signIn(model) {
  try {
      const response = await axios.post(`${local}/sign-in`, model,{cache:'no-cache'});
      return response.data; // Trả về dữ liệu từ phản hồi của API
  } catch (error) {
      throw error; // Ném lỗi nếu có lỗi xảy ra trong quá trình gọi API
  }
}

export async function getUserById(userId) {
  try {
      const response = await axios.get(`${local}/get-userId/${userId}`,{cache:'no-cache'});
      return response.data; 
  } catch (error) {
      throw error; 
  }
}


export async function putUserById(userId, model) {
  try {
    const response = await axios.put(`${local}/put-user/${userId}`, model);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function donHang(model){
  try {
    const response = await axios.post(`${local}/don-hang`, model,{cache:'no-cache'});
    return response.data; // Trả về dữ liệu từ phản hồi của API
} catch (error) {
    throw error; // Ném lỗi nếu có lỗi xảy ra trong quá trình gọi API
}
}
export async function donHangAll(idUser){
  // 
  try {
    const response = await axios.get(`${local}/get-don-hang/${idUser}`,{cache:'no-cache'});
    return response.data; // Trả về dữ liệu từ phản hồi của API
} catch (error) {
    throw error; // Ném lỗi nếu có lỗi xảy ra trong quá trình gọi API
}
}
export async function donHangChiTiet(model){
  try {
    const response = await axios.post(`${local}/don-hang-chi-tiet`, model,{cache:'no-cache'});
    return response.data; // Trả về dữ liệu từ phản hồi của API
} catch (error) {
    throw error; // Ném lỗi nếu có lỗi xảy ra trong quá trình gọi API
}
}
export async function getdonHangChiTiet(idDonHang){
  try {
    const response = await axios.get(`${local}/get-don-hang-chi-tiet/${idDonHang}`,{cache:'no-cache'});
    return response.data; // Trả về dữ liệu từ phản hồi của API
} catch (error) {
    throw error; // Ném lỗi nếu có lỗi xảy ra trong quá trình gọi API
}
}


