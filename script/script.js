

//যা যা হইল ১। একটা arrow ফাংশন নিলাম loadissues 
// ২। Fetch করে ডাটাবেজ থেকে নিয়া আসলাম 
// ৩। fetch er promiss pawar পর (res=> res.json()) দিয়া json ডাটার প্রমিজ অ নিলাম 
// ৪। json data k displayissues er ভিতর নিলাম, 
// ৫। তার আগে displayissues ekta function create kore nilam, console log করে দেক্লাম ভালবাসে কি না।


const loadissues = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
  .then(res => res.json())
  .then((json) => displayissues(json.data));

};
  const displayissues = (issues) => {
    console.log(issues);

    // 1. get the container & empty
    const issueContainer = document.getElementById("issue-container");
    issueContainer.innerHTML="";

    // 2. get into every issues
    for (let issue of issues) {

    // 3. create Element
     const issuecard=document.createElement("div");
    issuecard.innerHTML=`
        <div class = "grid-4 border-transparent mx-2 my-2 space-x-2 pl-2 shadow-xl bg-white rounded-md">
        <div class ="flex text-center items-center justify-between">
        <p><i class="fa-regular fa-circle-dot text-2xl py-3 text-green"></i></p>
        <h1 class="bg-green-400 px-[10px] h-8 rounded-2xl py-1">${issue.priority}</h1>
        </div>
        <h1 class = "font-bold">${issue.title}</h1>
        <h1>${issue.description}</h1>
        <div class="flex px-2 gap-3 text-sm py-5">
        <p class="bg-green-400 px-[10px] h-5 rounded-2xl">${issue.labels[0]}</p>
        <p class="bg-yellow-400 px-[10px] rounded-2xl">${issue.labels[1]}</p>
        </div>
        <hr class="opacity-40 py-8">
        <p class="">${issue.author}</p
        <p class="">${issue.updatedAt}</p
        </div>
    `;
    // 4. apend into container
        issueContainer.append(issuecard);
    }

  };

loadissues();

