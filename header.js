/* =====================================================
   CONTEGIACJP - COMMON HEADER
   ===================================================== */

document.addEventListener("DOMContentLoaded", function(){

    const headerContainer =
        document.getElementById("site-header");

    if(!headerContainer){
        return;
    }


    /* ================= HEADER HTML ================= */

    headerContainer.innerHTML = `

    <div class="common-header">

        <div class="common-logo">

            <img
                src="logo.png"
                alt="ConteGiacJP"
            >

            <div class="common-logo-text">

                <h1>ConteGiacJP</h1>

                <p>
                    Học tiếng Nhật bằng cách kiên trì lặp đi lặp lại mỗi ngày!
                </p>

            </div>

        </div>


        <div class="common-header-right">

            <!-- CHƯA ĐĂNG NHẬP -->

            <div
                id="common-guest-actions"
                class="common-guest-actions"
            >

                <button
                    class="common-register-btn"
                    onclick="openRegister()"
                >
                    Đăng ký
                </button>

                <button
                    class="common-login-btn"
                    onclick="openLogin()"
                >
                    Đăng nhập
                </button>

            </div>


            <!-- ĐÃ ĐĂNG NHẬP -->

            <div
                id="common-user-actions"
                class="common-user-actions"
            >

                <div class="common-username">

                    <span id="common-header-username">
                        Đang tải...
                    </span>

                </div>


                <button
                    class="common-profile-btn"
                    onclick="location.href='profile.html'"
                >
                    Hồ sơ
                </button>


                <button
                    class="common-logout-btn"
                    onclick="logoutUser()"
                >
                    Đăng xuất
                </button>

            </div>


            <!-- TRANG CHỦ -->

            <button
                class="common-home-btn"
                onclick="location.href='index.html'"
            >
                🏠 Về trang chủ
            </button>

        </div>

    </div>


    <!-- LOGOUT POPUP -->

    <div
        id="logout-popup"
        class="common-logout-popup"
    >

        <div class="common-logout-box">

            <div class="common-logout-icon">
                ↪
            </div>

            <h2>Đăng xuất</h2>

            <p>
                Bạn có chắc chắn muốn<br>
                đăng xuất tài khoản không?
            </p>

            <div class="common-logout-actions">

                <button
                    class="common-logout-cancel"
                    onclick="closeLogoutPopup()"
                >
                    Hủy
                </button>

                <button
                    class="common-logout-confirm"
                    onclick="confirmLogout()"
                >
                    Đăng xuất
                </button>

            </div>

        </div>

    </div>

`;


    /* ================= CSS ================= */

    const style = document.createElement("style");

    style.textContent = `

        /* ================= HEADER ================= */

      .common-header{

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:18px 50px;

    background:white;

    border-bottom:3px solid #22c55e;

}


.common-logo{

    display:flex;

    align-items:center;

    gap:18px;

}


.common-logo img{

    width:135px;

    height:auto;

}


.common-logo-text h1{

    margin:0;

    color:#16a34a;

    font-size:42px;

}


.common-logo-text p{

    margin:6px 0 0;

    color:#666;

    font-size:22px;

}


        .common-header-right{

            display:flex;

            align-items:center;

            gap:10px;

        }


        /* ================= GUEST ================= */

        .common-guest-actions{

            display:flex;

            align-items:center;

            gap:15px;

        }


        .common-register-btn{

            background:#22C55E;

            color:white;

            border:none;

            border-radius:10px;

            padding:12px 22px;

            cursor:pointer;

            font-size:16px;

            font-weight:bold;

        }


        .common-register-btn:hover{

            background:#16A34A;

        }


        .common-login-btn{

            background:white;

            color:#1E40AF;

            border:2px solid #1E40AF;

            border-radius:10px;

            padding:10px 22px;

            cursor:pointer;

            font-size:16px;

            font-weight:bold;

        }


        .common-login-btn:hover{

            background:#1E40AF;

            color:white;

        }


        /* ================= USER ================= */

        .common-user-actions{

            display:none;

            align-items:center;

            gap:10px;

        }


        .common-username{

            color:#1E40AF;

            font-size:15px;

            font-weight:bold;

            padding:8px 5px;

            white-space:nowrap;

        }


        .common-profile-btn{

            background:#22C55E;

            color:white;

            border:none;

            border-radius:10px;

            padding:10px 18px;

            cursor:pointer;

            font-size:15px;

            font-weight:bold;

        }


        .common-profile-btn:hover{

            background:#16A34A;

        }


        .common-logout-btn{

            background:#EF4444;

            color:white;

            border:none;

            border-radius:10px;

            padding:10px 18px;

            cursor:pointer;

            font-size:15px;

            font-weight:bold;

        }


        .common-logout-btn:hover{

            background:#DC2626;

        }


        .common-home-btn{

            background:white;

            color:#1E40AF;

            border:2px solid #1E40AF;

            border-radius:10px;

            padding:10px 18px;

            cursor:pointer;

            font-size:15px;

            font-weight:bold;

        }


        .common-home-btn:hover{

            background:#1E40AF;

            color:white;

        }


        /* ================= LOGOUT POPUP ================= */

        .common-logout-popup{

            display:none;

            position:fixed;

            z-index:99999;

            top:0;

            left:0;

            width:100%;

            height:100%;

            background:rgba(0,0,0,.45);

            justify-content:center;

            align-items:center;

        }


        .common-logout-box{

            width:400px;

            background:white;

            border-radius:20px;

            padding:35px;

            text-align:center;

            box-shadow:0 20px 60px rgba(0,0,0,.25);

        }


        .common-logout-icon{

            width:65px;

            height:65px;

            margin:0 auto 15px;

            border-radius:50%;

            background:#FEE2E2;

            color:#EF4444;

            display:flex;

            align-items:center;

            justify-content:center;

            font-size:32px;

            font-weight:bold;

        }


        .common-logout-box h2{

            margin:10px 0;

            color:#1E40AF;

        }


        .common-logout-box p{

            font-size:16px;

            line-height:1.6;

            color:#666;

            margin-bottom:25px;

        }


        .common-logout-actions{

            display:flex;

            justify-content:center;

            gap:12px;

        }


        .common-logout-cancel,
        .common-logout-confirm{

            padding:12px 25px;

            border-radius:10px;

            font-size:15px;

            font-weight:bold;

            cursor:pointer;

        }


        .common-logout-cancel{

            background:white;

            color:#1E40AF;

            border:2px solid #1E40AF;

        }


        .common-logout-cancel:hover{

            background:#EFF6FF;

        }


        .common-logout-confirm{

            background:#EF4444;

            color:white;

            border:none;

        }


        .common-logout-confirm:hover{

            background:#DC2626;

        }


        /* ================= RESPONSIVE ================= */

        @media(max-width:800px){

            .common-header{

                width:90%;

            }

            .common-header-right{

                gap:5px;

            }

          

        }

    `;

    document.head.appendChild(style);


    /* ================= UPDATE HEADER ================= */

    updateCommonHeader();

});


/* =====================================================
   KIỂM TRA USER
   ===================================================== */

async function updateCommonHeader(){

    const {
        data:{
            session
        }
    } =
        await supabaseClient.auth.getSession();


    const guestActions =
        document.getElementById(
            "common-guest-actions"
        );


    const userActions =
        document.getElementById(
            "common-user-actions"
        );


    const usernameElement =
        document.getElementById(
            "common-header-username"
        );


    /* ================= CHƯA ĐĂNG NHẬP ================= */

    if(!session){

        if(guestActions){
            guestActions.style.display = "flex";
        }

        if(userActions){
            userActions.style.display = "none";
        }

        return;

    }


    /* ================= ĐÃ ĐĂNG NHẬP ================= */

    const username =
        session.user.user_metadata?.username ||
        "User";


    if(usernameElement){

        usernameElement.textContent =
            username;

    }


    if(guestActions){

        guestActions.style.display =
            "none";

    }


    if(userActions){

        userActions.style.display =
            "flex";

    }

}


/* =====================================================
   THEO DÕI ĐĂNG NHẬP / ĐĂNG XUẤT
   ===================================================== */

supabaseClient.auth.onAuthStateChange(function(){

    updateCommonHeader();

});


/* =====================================================
   ĐĂNG XUẤT
   ===================================================== */

function logoutUser(){

    document.getElementById(
        "logout-popup"
    ).style.display = "flex";

}


function closeLogoutPopup(){

    document.getElementById(
        "logout-popup"
    ).style.display = "none";

}


async function confirmLogout(){

    const {
        error
    } =
        await supabaseClient.auth.signOut();


    if(error){

        console.error(error);

        alert("Không thể đăng xuất.");

        return;

    }


    location.href = "index.html";

}