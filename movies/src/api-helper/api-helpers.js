import axios from 'axios';
export const getAllMovies=async()=>{
const resp=await axios.get("/movies")
.catch(err=> console.log(err))

if (resp.status!== 200)
{
    return console.log("No Data")
}

const data=await resp.data;
return data;

}
export const sendUserAuthRequest=async(data,signup)=>{
   const res=await axios.post(`/users/${signup?"signup":"login"}`,{
        name:signup? data.name : "",
        email:data.email,
        password:data.password
    }).catch(err=>{
        console.log(err);
    })
    if(res.status!==200 && res.status!==201)
    {
        console.log("unexpected error ocuured")
    }
    const resData=await res.data;
    return resData;
}
export const sendAdminAuthRequest=async(data)=>{
    const res=await axios.post('/admin/login',{
        email:data.email,
        password:data.password
    }).catch(err=>{
        console.log(err);
    })
    if(res.status!==200)
    {
        return console.log('unexprected');
    }
    const resData=await res.data;
    return resData;
}
export const getMoviedetails=async(id)=>{
   const res=await axios.get(`/movies/${id}`).catch((err)=>{console.log(err)})
   if(res.status!==200)
   {
    return console.log("unexpected error")
   }
   const resData=await res.data;
   return resData;
};
export const newBooking=async(data)=>{
  
    

        const res=await axios.post('/booking',{
            movie:data.movie,
            seatNumber:data.seatNumber,
            date:data.date,
            user:localStorage.getItem("userId")
        })
        
        .catch((err)=>{console.log(err)});
        console.log(data,localStorage.getItem("userId"));
        if(res.status!==201)
        {
            return console.log("unexpected error")
        }
        const resdata=await res.data;
        return resdata;
}
