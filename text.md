
// loadissues function 

const loadissue=()=>{    //arrow ফাংশন বানালাম

  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")  // ডাটা ফেচ বাই fetch function, it gives promiss of response
  .then(res=> res.json())  // প্রমিস অফ জেসণ ডাটা পাওয়ার জন্য (res=> res.reson()) কে কল করব। it promiss of json data
  // .then((json) => console.log(json.data)); // console.log kore dekbo data pacche ki na, sathe loadissues() function ta } er baire likte hobe to call it.
  .then((json) => displayissues(json.data)); // 
};

// displayissues function বানালাম, এইটা dia Display korabo UI te.
const displayissues=(issues) => {    // এইখানে issues ekta প্যারামিটার সেট করা হইল   
  console.log(issues);
}

loadissue();







fetch ("link")
.then((response) => response.json()) (response hok are res hok eita bisoy na, fetch jeta dibe oitai eita dhorbe)
.then((data) => console.log(data))