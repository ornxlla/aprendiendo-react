import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
    <section className='App'>
     <TwitterFollowCard userName="ornxlla" initialIsFollowing={true} >
         Ornella Alonso
     </TwitterFollowCard>

     <TwitterFollowCard  userName="Lautaro2626" >
            Lautaro Baez
    </TwitterFollowCard>

     <TwitterFollowCard userName="xSlowikx">
            Alejandro Rios
   </TwitterFollowCard>  

     <TwitterFollowCard userName="elianadenise">
            Eliana Navarro 
    </TwitterFollowCard>
     </section>
    )
}