import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import Button from './Button'

const Choice = ({ fields, addOption, removeOption }) => {
	
	return (
		<div className="add-form">
			<div className="form-control">
				<label>Welcome!!! What decision can we help you make today?</label>
				<input 
					type="text"  
					id="question" 
					placeholder="Ask any question" 
					// value={question} 
					// onChange={(e) => setQuestion(e.target.value) } 
				/>
			</div>

			<h5>We can make a choice for you, just type in as many answers as possible!!!</h5>
			{fields.map((field, index) => {
				return(
					<div key={index} className="form-control choice">
						<input 
							type="text"  
							id="1" 
							className="Answer"
							placeholder= {`${index + 1}: Add an option`}
							// value={text} 
							// onChange={(e) => setText(e.target.value) }  
						/>
						<FaTrash onClick={removeOption} style={{ color:'red', marginLeft:'2em', cursor:'pointer'  }}  />
					</div>
				)
			})}
			<FaPlus onClick={addOption} 
			style={{ color:'white', 
					 backgroundColor:'#3473e7', 
					 cursor:'pointer', 
					 padding:'2px' }}  />

			<Button
				color= '#3473e7' 
				text= 'Get a Response'
        	/>
		</div>
	)
}

export default Choice