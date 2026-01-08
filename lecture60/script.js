document.addEventListener('DOMContentLoaded', function(){

    const searchButton = document.getElementById('search-button');
    const userInput = document.getElementById('user-input');
    const statsContainer = document.querySelector('.stats-container');
    const easyProgressCircle = document.querySelector('.easy-progress');
    const mediumProgressCircle = document.querySelector('.medium-progress');
    const hardProgressCircle = document.querySelector('.hard-progress');
    const easyLabel = document.getElementById('easy-label');
    const mediumLabel = document.getElementById('medium-label');
    const hardLabel = document.getElementById('hard-label');
    const statsCards = document.querySelector('.stats-cards');



    function updateProgress(solved, total, label, circle){
        label.textContent = `${solved} / ${total}`;
        const progressDegree = (solved / total) * 100;
        circle.style.setProperty('--progress-degree', `${progressDegree}%`);
    }
    
    function displayUserData(parsedData){
        const totalQues = parsedData.data.allQuestionsCount[0].count;
        const totalEasyQuestions = parsedData.data.allQuestionsCount[1].count;
        const totalMediumQuestions = parsedData.data.allQuestionsCount[2].count;
        const totalHardQuestions = parsedData.data.allQuestionsCount[3].count;

        const solvedtotal = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedEasy = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedMedium = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedHard = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;
        
        updateProgress(solvedEasy, totalEasyQuestions, easyLabel, easyProgressCircle);
        updateProgress(solvedMedium, totalMediumQuestions, mediumLabel, mediumProgressCircle);
        updateProgress(solvedHard, totalHardQuestions, hardLabel, hardProgressCircle);

        const cardsData = [
            {
                label: "Overall Submissions",
                value: parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions
            },
            {
                label: "Overall Easy Submissions",
                value: parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions
            },
            {
                label: "Overall Medium Submissions",
                value: parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions
            },
            {
                label: "Overall Hard Submissions",
                value: parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions
            }
        ];
        // console.log("logging cardsData", cardsData);
        statsCards.innerHTML = cardsData.map(data => {
            return `
                <div class="card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                </div>
            `
        }).join('');
    }

    async function fetchUserDetails(username){
        // fetching data in try catch block
        try{
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;
            statsContainer.style.setProperty("display", "none");
            
            // const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
            // const response = await fetch(url);
            // api not working, so using graphql endpoint
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const targetUrl = 'https://leetcode.com/graphql/';
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const graphqlQuery = JSON.stringify({
                query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                variables: {"username": `${username}`}
            });
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: graphqlQuery
            };
            const response = await fetch(proxyUrl+targetUrl, {...requestOptions, signal: AbortSignal.timeout(15000)});
            //
            if(!response.ok){
                throw new Error("Unable to fetch user details");
            }
            const parsedData = await response.json();
            // console.log("logging data: ", parsedData);
            displayUserData(parsedData);
            statsContainer.style.setProperty("display", "flex");
        }
        catch (error){
            alert(error.message);
            return;
        }
        finally{
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    function validateUsername(username){
        if(username.trim() === ''){
            alert("Username cannot be empty");
            return false;
        }
        // regex for leetcode username
        const regex = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/;
        const isMatching =  regex.test(username);
        if(!isMatching){
            alert("Invalid username format");
        }
        return isMatching;
    }

    searchButton.addEventListener('click', function(){
        const username = userInput.value;
        // console.log("logging username: " + username);
        if(validateUsername(username)){
            fetchUserDetails(username);
        }

    }); 
});