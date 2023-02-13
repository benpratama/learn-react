/**
       * ini tempat buat ngerender
      */
const root = document.querySelector('#root');
console.log("ajinggg");
/**
 * ini untuk buat elmentnya
*/
const h1_1 = React.createElement('h1', {
  children: 'kontolll ayam',
  className: 'heading1'
});
const h1_2 = React.createElement('h1', {
  children: 'kontolll ayam2',
  className: 'heading2'
});
const list = /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "mantap"), /*#__PURE__*/React.createElement("li", null, "mantap2"), /*#__PURE__*/React.createElement("li", null, "mantap3"));
var nama = 'asuu';
const h1_3 = /*#__PURE__*/React.createElement("h1", {
  class: nama
}, "Tanggal sekarang", new Date().toLocaleDateString(), " nama: ", nama);

/**
 * function yang returnnya jsx elment atau react element
 * itu componen
 * nama functionnya pake kapital depannya
 * parameternya yanh diterima itu bentuknya object
*/
function Hallo(props) {
  return /*#__PURE__*/React.createElement("p", null, "hallo ", /*#__PURE__*/React.createElement("b", null, props.name), " kamu kelas: ", /*#__PURE__*/React.createElement("b", null, props.kelas));
}
const par = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hallo, {
  name: "mantapp",
  kelas: "12"
}));

/**
 * function all ini isinya
 * 1. buat atribut time yang ambil waktu tiap detik
 * 2. create element
 * 3. render
*/
function all() {
  const time = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      color: 'red'
    }
  }, "jam sekarang"), /*#__PURE__*/React.createElement("h2", null, new Date().toLocaleTimeString()));

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
  const element = React.createElement(React.Fragment, {
    children: [par, time]
  });

  /**
   * ini buat render
  */

  ReactDOM.render(element, root);
}

/**
 * ini buat manggil tiap detiknya
*/
setInterval(function () {
  all();
}, 1000);

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