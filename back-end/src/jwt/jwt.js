import jwt from "jsonwebtoken"


const secret="jkdfu8eurjtiuhjrej57rydf";
const token=jwt.sign({userId:1,roles:["teacger"]},secret)


try{
    const decoded=jwt.verify(token,secret);
}catch{
    console.log("jwt not vallid");
}