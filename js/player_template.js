function PlayerTemplate(data) {
  return `
   <li> ${data.FirstName} ${data.LastName} is a level 
   ${data.Level} and can be reached at ${data.Email}</li>
  `;
}

export default PlayerTemplate;