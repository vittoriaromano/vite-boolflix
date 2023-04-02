<script>
import { store } from '../store';
import CountryFlag from 'vue-country-flag-next'
import SearchBox from './SearchBox.vue';
export default{
    name: 'Movies',
    components:{
       SearchBox,
       CountryFlag
    },
    data(){
      return store
    },
    props:{
        info: Object,
        imagePath: String
    },
    computed:{
        // lingue e paesi con iniziali non uguali
        language(){
            switch(this.info.original_language){
                case 'en':
                   return 'gb';
                case 'he':
                    return 'il';
                case 'zh':
                    return 'hk';
                case 'ja':
                    return 'jp';
                case 'cs':
                    return 'cz';
                case 'hi':
                    return 'in';
                case 'ko':
                    return 'kr';

                default:
                    return this.info.original_language;
            }
        },
        // titolo per film e serie congruente
        title(){
            return this.info.title || this.info.name;
        },
        // titolo originale per film e serie congruente
        original_title(){
            return  this.info.original_title || this.info.original_name
        },
        // voto da 1 a 5
        getVote() {
            return Math.ceil(this.info.vote_average / 2);
        },
    }
}
</script>

<template>
   
    <div class="card" >
            <div class="flip-card">
                <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="card-inf">
                        <div class="img">
                            <!-- TODO; link appare nell' <img scr> nell'inspector ma non l'imagine :)-->
                            <img :scr="(urlBase + info.poster_path)" v-if="info.poster_path !== null"> 
                            <img v-else src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBEREQ8PDxISDxAPEREPDw8PEhEPEBERGBQZGRgUGBgcIS4lHB4rHxgYNDgoKy8xNTc1HCQ7QDszQC40NTEBDAwMEA8QHhISHjQrISs0NDExMTQ0NDExNDQ0NDQ0NDQ0MTQ0NDQ0NDExNDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBQYHCAT/xABHEAACAQMCAgUHCQcCAwkAAAABAgADBBEFEiExBgcTQVEUIjJhcYGRF0JSU1RilKHScoKSk6LB0bGzI3PCFSQzNDVEY3Sy/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAAICAwADAAAAAAAAAAAAAQIREkEhMVEDE2H/2gAMAwEAAhEDEQA/AOiKJWBAErAlRIEqAgCVAQJAlQEASqQBKoEQEmIECYESYExEQEiTECmJMiBEgyZEBKSJVBgWyJSRLhEoIlFsiUsJdIlDCBaIlsiXiJQRAoxIleIgXAJWBIAlQECQJUBAEqAgAJUBAEkSAIkiICTEQEs3t5SoU2rV3SjSTaHqVGCKu5goyTy4kfGX5zjrr1Hs7O3tVPnXNbew8adIZI/iZPhLJurJu6dGpurqHQh1YZVlIZWHiCOcqnl3SdevLM5tLipQB4lEbNMnxKNlSfaJt1n1takmBUS2r45l6box96MB/TLca1cK7pE40euO5xws6APialQj4TGXvWtqlQEU/J7fPJqVIsw97sw/KONOFd1q1FRWZ2VEUZZ3IVVHiSeAlmxvKVwi1rd0rUnLBKiMGRirFWwRz4g/CeZNU1m6u23XVercEHIFRyVU+Kr6K+4Tr/Utfb7CtQJ421w20eCVFDD+oPFx1DLHU26HIkxMsKYMmIFJlJlZEgiBQRKCJcIlJEotkSgiXCJBEC3iJViRAuASoCQJWIEgSoCQJUJAEkQJMBEmRASYiAnBet3Uu21NqQOVtKSUQO7ew3sR/EB+7O71qqoru5wiKzufBVGSfgJ5Z1O9a4r17hs7riq9Yg8SNzFse7OPdNYzy6YTy+WIidXYiIgJ0fqUvtl7c255XFvuHH59Jhgfwu/wnOJsHQS+8n1OxqE4U11pN+zVBpnPq87PukynhnObj0nIkmJxedERECDIMqlMCDKSJWZSYFsykysiUkSiMREQKxKhIAlQECRJEASRIEkRJgIkxAREQNT6ztR8n0q6wcPcBbVByz2hw/8ARvnned360Oj99qK2lGzRXp0merVL1ETNQgKgAJ7hu/inPfku1f6ql/Pp/wCZ0xskdcLJGlRN1+S/V/qqX8+n/mPkv1f6ql/Pp/5muUb5RpUTdfkv1f6ql/Pp/wCY+S/V/qqX8+n/AJjlDlGlSVcqQynDKQysOYYcQfjN0+S7V/qqX8+n/mPku1f6ql/Pp/5jlE3Pru2m3a3FChcL6NeklZceDoG/vPomC6E2NxbafbW12qrWoK9MhWVxsDNs4j7pX4TPTi41ESYhFMiVSIFJkESqQYFBEpMrMpIlFMSrEQKhKsSBJEgCVCQJMCZMjMmAiJDuFBZiFVQSzMQFAHMknkIEzFa70js7BVa8rLS3+gmGeo/iQqgsQPHGJovTDrTp091DS9tap6LXTDNFT37F+efWfN/anIr27q16j1q9R6tVzlnqNuY+/wAPVyE1MdtzC32738puj/aW/D3P6I+U3R/tLfh7n9E8+RNcI3+uPQfym6P9pb8Pc/oj5TdH+0t+Huf0Tz5EcIcI9B/Kbo/2lvw9z+iPlN0f7S34e5/RPPkRwh+uPQfym6P9pb8Pc/oj5TdH+0t+Huf0Tz5EcIfrj0H8puj/AGlvw9z+ibJpGrW95SW4tai1qbcNy5BVu9WU8VPqM8sTLdH9fudPrCvavsY4FRGy1Oqo+a69458eYzwIi4Jfx/Hp6JrPQ/ppbammEPY3Kruq2zHLDxZD89fWOI4ZAmzTm52aREmRCIlJlUgwKSJGJUZBgRiJOIgTESYCTIkwJiJMBNO6UdEbvUWK1tR7C1zwtbe3O0+Bdy/nH2jHgBNxiFl05pT6nbP591ct+ytFP9VM+ml1RaaPSq3b+2pSX/RJ0KaL1r9Iq1laUqdsxp1btnU1R6dOmigttPcx3KM9wzjjgzUtrUyyt1t8F90H6PWuFuq3ZMeIWtdhHI9SjBPwmNay6IKcGoW9lS+YfFZyh2LEsxLMxLMzElmJ5kk8zKZvj/XTj9rsNvYdEH4K9IZ+suLykPizCbDadA9DqoHoUKdZDyenc1qqH94ORPPsyOjaxcWVVa9rUak4I3AHzXH0XXky+o+7ElxvVS43qu8/J1o/2Nf5tx+uYTUOj3RegxWubdGX0kF3XLr7UVyR8JzrW+sDUbykaFSqtKmT54t1NIuPos2SSvq+OZqoETG91Jjl3XWWt+h+cb8fsvqJHxl+hoXRSqQEuEQnkGuqtL/cInH4l4f1rj/Xdj1U6U4DI1yFYZVqdZHUjxBKnM+Z+p+xPo3F2Pa1Bh/+Jz7oB0lr2V3b01dmtrirTpVqBOU89gu9R81gSDkc8YM9EzN3O3O8p425evVEtN0q2uo1qFRGDJU7JWZWHeCrqROiaXSrpSVLmqlxVXgayUuwDjuJTcQG8cHHqE+uJm3bNtvtEiVSJERIkyIEGIgwGIiICTEmAiJMBJkSYCIiAnOeuuwapZULhRkW1fDn6KVF25/iCj3zo0sX1nTuKVShWUPSqoyOp5FSPyPrll01Lq7eUonRNd6qL2k7GyKXdHJKhnSlXUZ4KwbCtjhxB4+AmOtOrLV6hw1BKI+lWrUtv9BY/lOvKO3KNMmzdCuiNbU6wADJa02HlFxjAA70U97EfDOT3Z6DoHVHQplX1CsbkjB7CiGpUvYz+kw9m2dItrZKSJSoolKmg2oiKERR4ACYyy+MZZ/HPOsjoJ5RSp3FhSUVrZBTaggC9rRXlt8XXj7QfEATijKQSpBBBIKkYII5gjuM9ZzWOk/Qax1El6iGjcH/ANxQwjt+0MYfl3jOOREmOWvaY5a9vOUToep9UuoUyTb1KN0vd5xt6h/dbK/1TGW/VrrDttNstMfTqVqOwfwsT8BOnKOnKMb0I09rnUrGkASBXp1nIGQEpnexPgMLj3iel5p/QPoRT0xXqOwrXdVdr1QMIi5zsTPHGQMk88DgMTb5zyu65ZXdIlKOrbgpDbG2tgg7WwDtPgcEcPXKplkkGSZEIiJMiBEiTECMRJxEAJMSYCIkwEREBERA0/rP1apZ2NK4oNtqreUNhPIkB2Kkd6kKQR4EzPdHtZpX9rSuqPo1B5yHiyOODo3rB+PA9807rt/9Ot//AL9L/Yrzn/V10tOm3GyqSbO4KrXHE9m3JawHq5HxHsE1JuNybm3oOJCOGAZSGVgGVlIIIIyCD3iTMskREBERARLdxXSmjPUdaaIMu7sERR4kngJz7pJ1q2lDclivllUZHaHclup8c+k/uwD9KWS1ZLW/3d3ToI1Wu60qaDLPUYKqj1kzknTLrTaoGt9L3U1PBrxhtqMP/jU+iPvHj4Ac5oWvdIbq/ftLuq1TBylMebSp/soOA9vPxJmJJxxm5j9dJhr29C9VlNhpNs7ZL1XuKrMxJZi1dxuJPMkAHPrm3zGdGrI21jZW59KlbUkf9vaN355mTnOuVIiIREiVSIESJMQIiTECYkxAREQEREBERA0frgo7tJdvqq9Cp7Mts/65wOemOm9kbjTb+kBuY27Oq+Lp56j4qJ5nnTD07fj9On9WHToUNmnXz4oEhbWu54UST/4Tn6BPI/N5cuXZZ5LnSOgfWQ1qEtNQLVLYYWlcAF6lAfRYc3T8x6xgCZY9xMse47ZEtWtzTrIlWi6VabjcrowdGHqIl2Yc1NVyqswVnKqWCJt3OQPRGSBk+sicf1vrdrkvTs7VbfaSpe5JeqCOBBQYCsD3EtOxTz71q6ctvqtYoNq3KJdbRwAZtyv8WRj75rGS3y1jJb5a9q+t3d4we7r1K5Byqu3mKfuoMKvuAmOiJ1dtEzHRHTfK9Qs7fGVesjVOGR2aee+f3VPxmHnV+pPRiXudQYcFHktAnPFjhqjD2DYM+tpMrqM5XUdekRE4uBERASJMQIiTIgIk4iAiMxmAiMxmAiMxmFIjMZgCAeBGQeBB7x4Ty90i0s2d5dWh4ChVZVzxzTPnIfepWel7/Ure2Tfc1qdunc1WoqAnwGTxPsnIOtGhb3iUdYsHFekGNlcsgYbXU5RiCAR6WMnnlPGaxvlrC6rmkRE6u7KaLr93YsWtK70cnLKCGpt+0jZU8ueMzpnQrrC1G/u6Nm9G2YNlqlZVqIyUlGWYjcQTyA5cWE4/OydSek7KNzfuPOrMLekTj0E4sR7WIH7kzlJpjKTW3UJxHrsI/wC0LYfOFkmfZ29XH9527M4D1u3YqatUUcfJ6NGgfbtLn/cmMfbnh7aTEROruv2dpUrVKdCkpepVdaaKO92OB7vXPTnR7SUsbW3tE4iigVmxje54u3vYk++cy6qtBp29Krrd7imlNH8nLjgqAYev48eKr3+l4idN0rXrO7H/AHW4pVyACUVxvUfeQ+cPeJyyu3HK7ZGIzGZlzIjMZgIjMZgIxGYzAYiMxA+LymPKZi+0MdoZRlPKRHlImL7Qx2hgZTykR5SJi+0Mg1cAkkAAZJJwAPGBkq1+lNHd2VERSzu5CqqjmSTyE5b0r61HYtR0wbFGVN26gu3/AC0PBR62yfUJrnTnpa99UNCixW0pt5oHDt3Hz2+79Ee/ny1Cbxx+uuOHdX7y7q1nNWvUetUbm9Rmdj6snu9U2foFq1NXradd8bLUlFF88qdb5lQeBzgZ8dp7pqMTVnjTdm5pkdd0mpZ3FW2relTPmtjCuh9F19RHwOR3THTebOqus2q2tVgupWiHyaqx/wDM0gOKMTzbgPyb6U0qvRem7I6lHRirowwysOYMSkvVWyZ6P6JW4tdPs7fAVkoozgfWON7/ANTNPPWl2/a3FvSIyKtalTI9TMAfyM9E9pM5MfkrKG6A4k4A4knkB4zzRrmoG6u7q5PHt61SoueBCE+YPcu34TsfTnVvJtPuGBw9ZfJ6fHB3OCCR6wu4+6cMjGdn452TZ+g/RdtRuBvBW1okG4cZG88xSU/SPfjkOPPGfi6NdHqt/V2J5lJCDWrEeai+A8WPcP7TdelXSGlp1uNL07C1FXbUdTk0g3Ekt31Gzz7s+yXK9RrLLqPm6zula1Sul2m1ba32rWNPgrOvBaSgcNi4H7w+7x52jlWDKSrKcqykqynxBHEGUiJZNRZjqab/ANGOs66titO8LXtAcNzEeUKPUx9P2Nx+9OvaZrdC6pLXtqgqU35MOBB71YHirDwM8xTNdGOkFXT6wqUyWptgV6OfNqJ/Zh3H+2ZnLH4zlhv09G+Ux5TMHYailxSp16Lb6dRQyNyPrBHcQcgjxE+jtDMOLKeUx5TMX2hjtDAynlMeUzF9oY7QwMp5TJmK7UxAtyJGYzAqkSMxmBM0nrM1s0aC2lM4qXIPaEc1oDgR6tx4ewNN1zMbW0K1qV2uatJK1YhVDVf+IqKo4BVPmjvPLOSZYuN1XELHTLi4wLejVrZ4bkRmUe1uQ95mfter/UXGWSnR/wCbUGfggadhXAAA4AcgOAEnMvKtXOuYU+rGufTuaSnwVHf/AFxFTqxrgeZc0mPg6Og+IzOn5jMcqc8nGbvofqVoy1kplzTIZalq+9lYciFwG/KbNW0Q6zZUr3CUb8BkdgCqVSjFNrj5p4c+7ly5dAzIAAzjhk5OO8+McqXKuLdFbJ6eq2lGsjU3SqSyOMEFVZh7Rw5jgZ2ufJX0+jUq0bhkBrUCTSqcnUFSpXPeMMeBk6lfLb0aldwWFNchV4s7ngiKO9mYgD1mS3aXLk5p1o6r2lzTtEOUtl3Pjl2rgHHuXH8RmJ6LdFa1+wbjStlbD1yPSxzWmD6TevkPyOx6F0IqXFRrzVcqartVNsCQ7sxz55Hor90ceXLlOi0aaIqoiqiIAqIgCqqjkAByEu9TUauWpqMf5HTs7OrTtl7JKVGqylfS3BCd5Pe2RzM4/pXRi/vPPp0X2MdxrVjsVieJbLcXznmAZ3FgCCCAQRggjII8DJzJMtJMtOXUOrK6I/4legh8ED1PzIEuP1YVvm3VMn71N1/uZ03MZl5U55ORXPV1qCZKdjVxyCVCrH3OAPzmBv8AQby3ya9tVRRxL7C1Mfvrlfzne4zHKkzrl3VhrnZ1WsXbKV8vRyeC1QMso9TKPivrnUpjLvQrSq6Vnootam61ErUx2dQOpyCWX0uPcciZLMlu0tlu0xIzGZGUxIzGYExIzECndG6Wd8b4F7dG6Wd8ZgXd0bxLJkEQLxqCUmsJYKykoYH0G4Eg3InymmZSaJgfUbpYN4s+E25lBtDAyHlqyk3icM44HI9R8ZjzZnxMpNifEwrJ+XLHlqzGeQes/EyRZHxMIyfliyRdrMaLUysWxgZAXQlXlAnwigZUKRgfb2wkiqJ8gQysJA+ntBJ3ifOBKhAv7o3SwDJ3wL26N0s743wL2YlrdECzujdLWYzKLu6N0tZjMC7ujdLWYzAu7o3S1mMwLu6RulvMZgXN0ndLWYzAubo3S3mMwLu6N0tZjMC7ujdLWYzAu7o3S1mMwLu6N0tZjMC5ujdLeYzAubo3S3mMwLm6TulrMZgXd0S3mICIiAiIgIiICIiAiIgIiICIiBBkxEBERAREQEREBERAREQEREBERA//2Q==" alt="balto">
                        </div>
                        
                        <div>
                            <h2>{{ title }}</h2> 
                            <article>{{ original_title }}</article>
                        <!-- font stelline voto -->
                            <div>
                                <font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote"/>
                                <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5-getVote"/>
                            </div>
                            <!-- bandiere lingua -->
                            <country-flag :country='language' size='small'/>
                        </div>
                    </div>    
                </div>
                <div class="flip-card-back">
                    <h1>{{ title }}</h1>
                    <p> {{info.overview}} </p>

                </div>
                </div>
            </div>
    </div>
  
</template>

<style lang="scss" scoped>
@use '../assets/scss/variable.scss' as *;

img{
    height: 200px;
    width: 300px;
}
.card{
    position: relative;
    
}
.card-inf{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}

.flip-card {
  //background-color: transparent;
  width: 300px;
  height: 200px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  margin-bottom: 100%;
  background-color: $color1;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  color: white;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  background-color: $color3;
  
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  height: 200px;
  width: 300px;
  color: white;
  
}

/* Style the back side */
.flip-card-back {
  background-color: darken ( $color1, 100% );
  color: white;
  transform: rotateY(180deg);
  width: inherit;
  overflow-y: scroll;
  
}
</style>