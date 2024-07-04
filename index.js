let students = [
    { name: 'MaDhanvithan', gender:'Girl',dob:'01-09-2023', address: 'Wattala', contact: '07784581221',path: './assets/girl.png' },
    { name: 'Suresh', gender:'Male',dob:'01-09-2023', address: 'Bamba', contact: '07784581221', path: './assets/boy.png'},
];

function createStudentCard(student) {
    return `
        <div class="col-12 col-md-4 d-flex justify-content-center mb-4">
            <div class="card student-card text-center mb-4">
                <img src="${student.path}" class="card-img-top" alt="Student Avatar">
                <div class="card-body">
                    <p><strong>Student Name</strong> - ${student.name}</p>
                    <p><strong>Gender</strong> - ${student.gender}</p>
                    <p><strong>DOB</strong> - ${student.dob}</p>
                    <p><strong>Address</strong> - ${student.address}</p>
                    <p><strong>Contact</strong> - ${student.contact}</p>
                    <button class="btn btn-danger" onclick="deleteStudent('${student.name}')">Delete</button>
                </div>
            </div>
        </div>
    `;
}

  function addStudent() {

    let name = document.getElementById('sname').value;
    let gender = document.getElementById('sgender').value;
    let dob = document.getElementById('sdob').value;
    let address = document.getElementById('saddress').value;
    let contact = document.getElementById('scontact').value;
    if(gender === 'Male'){
        var path = './assets/boy.png'
    }
    else{
        var path = './assets/girl.png'
    }
    console.log(path);

    let newStudent = {
        name: name,
        gender: gender,
        dob: dob,
        address: address,
        contact: contact,
        path: path
    };


    students.push(newStudent);
    renderStudentCards(students);

    console.log(students);
}

function deleteStudent(name) {
    students = students.filter((student) => student.name !== name);
    console.log(students);
    renderStudentCards(students);
}

function renderStudentCards(students) {
const studentCardsContainer = document.getElementById('student-cards');
studentCardsContainer.innerHTML = students.map(createStudentCard).join('');
}

renderStudentCards(students);
