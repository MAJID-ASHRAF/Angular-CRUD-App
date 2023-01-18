import { User } from '../model/user.js'

export const getUsers = (req, res) => {
  User.find((err,users)=>{
    if(err){
      console.log(err);
    }else{
      res.send(users)
    }
  })
  
};
export const createUser = (req, res) => {
  const userToRegister = req.body;
  User.find((err,users)=>{
    if(err){
         console.log(err);
    }else{
     let avaible= users.some((user)=>{
       return user.email === userToRegister.email
      });
      if(avaible){
        res.json(
          {
            avaible:avaible,
            message: "user already registered"
          }
        )
      }else{
        User.insertMany([userToRegister])
        res.json({
          avaible:avaible,
          message:"successfully registered"
        })
      }
    }
  })
    
};
export const loginUser = (req, res) => {
  const auth = req.body;
  User.find((err,users)=>{
    if(err){
      console.log(err);
    }else{
      const matched = users.some((user) => {
        return user.email === auth.email && user.password === auth.password;
      });
      if (matched) {
        res
          .status(201)
          .json({ isMatched: matched, message: "successfully logged in" });
      } else {
        res
          .status(404)
          .json({
            isMatched: matched,
            message: "email or password is not matching",
          });
      }
    };
    })

};
export const updateUser = (req, res) => {
  const newUser = req.body;
  User.findOneAndUpdate(req.params,newUser,((err,doc)=>{
    if(err){
      console.log(err);
    }else{
      console.log(doc);
      res.send(true);

    }
  }))
  

};
export  const  deleteUser = (req, res) => {
  const {email} = req.params;
  
   User.findOneAndDelete({email},((err,doc)=>{
    if(err){
      console.log(err);
      console.log("errow aaw");
    }else{
      console.log(doc);
      res.send(true)
    }
   }))
  // let index = usersDb.findIndex((user) => user.email === email);
  // usersDb.splice(index, 1);
  // res.send(true);
};
export const findUser = (req, res) => {
  const { email } = req.params;
  User.find((err,users)=>{
    if(err){
      console.log(err);
    }else{
      let user = users.find((user) => {
          return user.email === email;
            });
       res.send(user);
    }
  })
};
