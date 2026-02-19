export default function Uliana() {
    return (
        <div 
            className="h-[832px]"
            style={{
                backgroundImage: 'url(/background.png)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div class="flex justify-center">
                <img src="/AboutMe.png"></img>
            </div>


            <div class="flex">
                <div class="ml-76 mt-20">
                    <div class="w-[254px] h-[429px]">
                        <img src="/ME 1.png" ></img>
                    </div>
                    <div class="ml-22 mt-5">
                        <img src="2007.png"></img>
                    </div>
                    <a 
                        href="https://open.spotify.com/playlist/68fx2cvpgD4veq63jgO9PQ?si=64b0762715164861"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white rounded-[10px] px-4 py-2 h-[50px] ml-10 mt-5 text-center"
                        style={{ backgroundColor: '#420B0B', textDecoration: 'none' }}
                    >
                        listen to my playlist
                    </a>
                </div>

            <div class="ml-30">
                <img src="photo2.png"></img>
            </div>

                <div className="mt-20 ml-25 relative">

                    <img src="/fortext.png"  className="absolute inset-0 w-full h-full" />

                    <div className="relative p-10" style={{ color: '#420B0B' }}>
                        <p><strong>NAME</strong>: ULYANA</p>
                        <p class="mt-2"><strong>AGE</strong>: 18</p>
                        <p class="mt-2"><strong>CITY</strong>: ROSTOV-ON-DON</p>
                        <p class="mt-2"><strong>MUSIC</strong>: QUEEN, WEEZER, THE BEATLES,<br /> 
                        COCTEAU TWINS, BILLIE EILISH, DAWID BOWIE,<br /> 
                        TV GIRL, MICHAEL JACKSON, HIM, RADIOHEAD,<br /> 
                        BOA, HALSEY, CHAPPELL ROAN, CHARLI XCX,<br /> 
                        LADY GAGA, THE CURE, THE CRANBERRIES, THE<br /> 
                        SMITHS, DEFTONES</p>
                        <p class="mt-2"> 
                            <strong>FILMS AND SERIES</strong>: TWIN PEAKS, X-FILES,<br/> 
                            TWILIGHT, DESPERATE HOUSEWIVES, THIRTEEN,<br/> 
                            10 THINGS I HATE ABOUT YOU, SPIDER-MAN,<br/> 
                            THE QUEEN’S GAMBIT, DARIA, MARIA<br/> 
                            ANTOINETTE
                        </p>
                    </div>
                </div>
            
            </div>
            
            
        </div>
    )
}