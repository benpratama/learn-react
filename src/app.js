/**
 * ini tempat buat ngerender
*/
const root = document.querySelector('#root')

/**
 * ini untuk buat elmentnya
*/

// ======================================================
// const h1_1 = React.createElement('h1',{
//   children: 'kontolll ayam',
//   className: 'heading1'
// });

// const h1_2 = React.createElement('h1',{
//   children: 'kontolll ayam2',
//   className: 'heading2'
// });

// const list = (
//   <ul>
//     <li>mantap</li>
//     <li>mantap2</li>
//     <li>mantap3</li>
//   </ul>
// )
// var nama = 'asuu'
// const h1_3 = <h1 class={nama}>Tanggal sekarang 
//   {new Date().toLocaleDateString()} nama: {nama}</h1>

// const element = React.createElement(React.Fragment,{
//   children:[h1_3,list,h1_2,h1_1]
// })
// ReactDOM.render(element,root)


// ======================================================
/**
 * function yang returnnya jsx elment atau react element
 * itu componen
 * nama functionnya pake kapital depannya
 * parameternya yanh diterima itu bentuknya object
*/
// function Hallo (props) {
//   return <p>hallo <b>{props.name}</b> kamu kelas: <b>{props.kelas}</b></p>
// }

// const par = (
//   <>
//   <Hallo name="mantapp" kelas="12"/>
//   </>
// )


// ===================================================
/**
 * function all ini isinya
 * 1. buat atribut time yang ambil waktu tiap detik
 * 2. create element
 * 3. render
 * tujuannya buat interval
*/
// function all(){
//   const time = (
//     <div>
//       <h1 class="heading">jam sekarang</h1>
//       <h2>{new Date().toLocaleTimeString()}</h2>
//     </div>
//   )

//   /**
//    * kalo misalnya ada beberapa node, 
//    * jadi perlu di bungkus pake 1 elment (div),
//   */
//   // const element = React.createElement('div',{
//   //   children:[h1_1,h1_2]
//   // })

//   /**
//    * kalo gak mau dijadiin 1 element dia bisa dijadiin fragemnt 
//    * nanti childrennya isinya, list
//   */
//   const element = React.createElement(React.Fragment,{
//     children:[par,time]
//   })
  
//   /**
//    * ini buat render
//   */

//   ReactDOM.render(element,root)
// }

// /**
//  * ini buat manggil tiap detiknya
// */
// setInterval(function(){all()},1000)


// ========================================
/**
 * event listener
 */
// function pasDiClick (msg){
//   alert(msg)
// }
// const button1 = <button onClick={pasDiClick.bind(this,'mantappp bingit')}>click me</button>
// const element = React.createElement(React.Fragment,{
//   children:[button1]
// })
// function plus(count){
//   return count+1;
// }

// function App(){
//   // Destructuring
//   const [count, setCount] = React.useState(1)
//   // const count = state[0]
//   // const updateCount = state[1]
//   console.log(setCount)

//   return(
//     <>
//       <button onClick={function(){setCount(count-1)}}>-</button>
//       <span>{count}</span>
//       <button onClick={function(){setCount(count+1)}} >+</button>
//     </>
//   )
// }


// ReactDOM.render(<App />,root)

// =============================================
function App(){
  const [diklik,setDiklik] = React.useState(false)
  const [count,setCOunt] = React.useState(1)
  
  // ini bakal dieksekusi pas pertama kali dan adaperubahan
  // parameter ke2 difokusin ->jadi kalo ada perubaha di valuenya dia bakal dieksekusi
  // kalo arraynya kosong dia cuma dieksekusi pas pertama kali
  // kalo gak pake array dia dirender terus
  React.useEffect(function(){
    console.log(document.getElementById('mantap'),)
  },[diklik])

  return(
    <>
      <h1 id="mantap">mantap</h1>
      <button onClick={function(){setCOunt(count+1)}}>WUAAA</button>
      <button onClick={function(){setDiklik(true)}}>t/f</button>
      <span>{diklik}</span>
    </>

  )
}
setTimeout(function(){
  ReactDOM.render(<App />,root)
},100)



// =============================================
/**
//  ini cara pure js
// AMBIL ROOTNYA DULU
const root = document.querySelector('#root')

// INI BUAT ELEMENTNYA 
const element = document.createElement('h2')
element.textContent = 'kontoll ayam'
element.className = 'heading'

//INI BUAT RENDER
root.appendChild(element)
**/