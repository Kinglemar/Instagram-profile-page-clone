import logo from '../assets/img/ig-logo.png'
import messi from '../assets/img/messi.jpeg'
export default function({user, deleteUser}){
    const fullName = user.first_name + ' ' + user.last_name
    return(
        <div class="account">
                <div class="messi rounded-full">
                    <div class="_aarf _aarg" aria-disabled="false" role="button" tabindex="0">
                        {/* <canvas class="canvas" height="108" width="108">
                    </canvas> */}
                        <div class="canvas rounded-full search-avatar xnz67gz x14yjl9h xudhj91 x18nykt9 xww2gxu x9f619 x1lliihq x2lah0s x6ikm8r x10wlt62 x1n2onr6 x1ykvv32 xougopr x159fomc xnp5s1o x194ut8o x1vzenxt xd7ygy7 xt298gk x1xrz1ek x1s928wv x162n7g1 x2q1x1w x1j6awrg x1n449xj x1m1drc7" role="link" tabindex="-1">
                            <img src={messi}  alt="image" class="orient rounded-full" crossorigin="anonymous" draggable="false" />
                        </div>
                    </div>
                </div>

                <div class="flex-basis basis identity">
                    <div class="flex-basis  identity" id="f972eb0e951c98">
                        <div class="brink">
                            <div class="flex-basis name identity">
                                <div class="brink ">{user.username}</div>
                                <div class="small-m identity">
                                    <span aria-label="Verified" class="verified-logo"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-basis identity">
                        <div class="brink gray _aada">{fullName}</div>
                    </div>
                </div>


                <div class="flex-basis name _abb0 identity" >
                    <button onClick={deleteUser} class="cancel cursor-pointer" type="button">
                        <div class="_abm0">
                            <svg aria-label="Close" class="mini-" color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16"><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
                        </div>
                    </button>
                </div>
            </div>
    )
}