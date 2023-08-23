export function Card(data) {
  const { id, name, username, email, phone, company } = data;
  return `
 <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://robohash.org/${id}" alt="Placeholder image">
      </figure>
    </div>
    
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://robohash.org/${id}" alt="Placeholder image">
          </figure>
        </div>
        
        <div class="media-content">
          <p class="title is-4">${name}</p>
          <p class="subtitle is-6">${username}</p>  
        </div>
      </div>
    
      <div class="content">
        <p><a href="mailto:${email}">${email}</a></p>
        <p><a href="tel:${phone}">${phone}</a></p>
        <p><b>${company.name}</b></p>
        <blockquote><i>"${company.catchPhrase}"</i></blockquote>
      </div>
    </div>
  </div>
`;
}
