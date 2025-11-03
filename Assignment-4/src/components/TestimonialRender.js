import testimonials from "../data/testimonials"
import student1 from '../images/student1.png'
import student2 from '../images/student2.png'
const race = [2,3]

function TestimonialRender(value){
    var rating = testimonials[value.value].rating
    return(
        <div>
            {value.value in race? <img src={student2} alt="Course" width="250"/>:<img src={student1} alt="Course" width="250"/>}
            <p><b>Student Name:</b> {testimonials[value.value].studentName}</p>
            <p><b>Course Name:</b> {testimonials[value.value].courseName}</p>
            <p><b>Review:</b> {testimonials[value.value].review}</p>
            <p><b>Rating:</b>   {rating >= 1 ? <span class = "1" style={{color: "gold", textShadow: "1px 1px black"}}>&#9733;</span> : 
                                <span class = "1" style={{color: "white", textShadow: "1px 1px black"}}>&#9733;</span>}
                                {rating >= 2 ? <span class = "1" style={{color: "gold", textShadow: "1px 1px black"}}>&#9733;</span> : 
                                <span class = "1" style={{color: "white", textShadow: "1px 1px black"}}>&#9733;</span>}
                                {rating >= 3 ? <span class = "1" style={{color: "gold", textShadow: "1px 1px black"}}>&#9733;</span> : 
                                <span class = "1" style={{color: "white", textShadow: "1px 1px black"}}>&#9733;</span>}
                                {rating >= 4 ? <span class = "1" style={{color: "gold", textShadow: "1px 1px black"}}>&#9733;</span> : 
                                <span class = "1" style={{color: "white", textShadow: "1px 1px black"}}>&#9733;</span>}
                                {rating >= 5 ? <span class = "1" style={{color: "gold", textShadow: "1px 1px black"}}>&#9733;</span> : 
                                <span class = "1" style={{color: "white", textShadow: "1px 1px black"}}>&#9733;</span>}
            </p>
        </div>
    )
}

export default TestimonialRender