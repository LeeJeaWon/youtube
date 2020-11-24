import routes from "../routes";

export const getJoin = (req, res) => { res.render("join" , {pageTitle: "join"}) };

export const postJoin = (req, res) => {
    const { body: { name, email, password, password2 } } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
      } else {
        // 할일 : 사용자 등록
        // 할일: 사용자 로그인
        res.redirect(routes.home);
      }   
};



export const getLogin = (req, res) => res.render("login", { pageTitle: "Log In" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};


export const logout = (req, res) => {
  // 할일 : 로그아웃 처리
  res.redirect(routes.home);
};
export const users = (req, res) => res.render("users" , {pageTitle: "users"});
export const userDetail = (req, res) => res.render("userDetail" , {pageTitle: "userDetail"});
export const editProfile = (req, res) => res.render("editProfile" , {pageTitle: "editProfile"});
export const changePassword = (req, res) => res.render("changePassword" , {pageTitle: "changePassword"});
