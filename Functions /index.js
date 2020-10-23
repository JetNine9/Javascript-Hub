let instructor = {
    name: 'app',
    teachers: ['ken', 'walton']
}


const {teachers} = instructor;

console.log(teachers)

const cars = [
    {
      model: "Honda Civic",
      coloursByPopularity: ["black", "silver"],
      speedStats: {
        topSpeed: 140,
        zeroToSixty: 8.5
      }
    },
    {
      model: "Tesla Model 3",
      coloursByPopularity: ["red", "white"],
      speedStats: {
        topSpeed: 150,
        zeroToSixty: 3.2
      }
    }
  ];

  const [honda, tesla] = cars;

  const {coloursByPopularity: [black, silver]} = honda

  console.log(black)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};



const { name, teachers, students, preReqs } = course;
const { equipment } = preReqs;

const OSXStudents = students.filter((student) => {
    if (student.computer.OS === "OSX") {
      return student;
    }
  });



console.log(OSXStudents);
