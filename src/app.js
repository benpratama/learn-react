/**
       * ini tempat buat ngerender
      */
const root = document.querySelector('#root')
console.log("ajinggg")
/**
 * ini untuk buat elmentnya
*/
const h1_1 = React.createElement('h1',{
  children: 'kontolll ayam',
  className: 'heading1'
});

const h1_2 = React.createElement('h1',{
  children: 'kontolll ayam2',
  className: 'heading2'
});

const list = (
  <ul>
    <li>mantap</li>
    <li>mantap2</li>
    <li>mantap3</li>
  </ul>
)
var nama = 'asuu'
const h1_3 = <h1 class={nama}>Tanggal sekarang 
  {new Date().toLocaleDateString()} nama: {nama}</h1>

/**
 * function yang returnnya jsx elment atau react element
 * itu componen
 * nama functionnya pake kapital depannya
 * parameternya yanh diterima itu bentuknya object
*/
function Hallo (props) {
  return <p>hallo <b>{props.name}</b> kamu kelas: <b>{props.kelas}</b></p>
}

const par = (
  <>
  <Hallo name="mantapp" kelas="12"/>
  </>
)

/**
 * function all ini isinya
 * 1. buat atribut time yang ambil waktu tiap detik
 * 2. create element
 * 3. render
*/
function all(){
  const time = (
    <div>
      <h1 style={{color:'red'}}>jam sekarang</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  )

  /**
   * kalo misalnya ada beberapa node, 
   * jadi perlu di bungkus pake 1 elment (div),
  */
  // const element = React.createElement('div',{
  //   children:[h1_1,h1_2]
  // })

  /**
   * kalo gak mau dijadiin 1 element dia bisa dijadiin fragemnt 
   * nanti childrennya isinya, list
  */
  const element = React.createElement(React.Fragment,{
    children:[par,time]
  })
  
  /**
   * ini buat render
  */

  ReactDOM.render(element,root)
}

/**
 * ini buat manggil tiap detiknya
*/
setInterval(function(){all()},1000)


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