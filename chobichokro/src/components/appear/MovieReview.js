import React from 'react'
import Navbar from "../navbar";
import {Card, CardBody} from 'reactstrap'
function MovieReview(props) {
    const reviews = [
        {
            id: 0,
            review: "Emotional extremes abound, this story takes you round and around, elevating high, then smashing you down, your guiding light, an endearing clown.\n" +
                "\n" +
                "The essence of all that's right, that's wrong, a fathers love for his wife and son, to the thieves of liberty with power - and a gun; the worst of man, the world undone."
        },
        {
          id: 1,
          review: "I find it sad that so many people are so narrow-minded that they will not watch a movie that is black and white or, in this case, is subtitled. I feel sorry for people who refuse to watch a movie like Life Is Beautiful just because it is a foreign film. They have no idea what a beautifully acted and directed film this is, and they'll never know what an amazing experience they are missing.\n" +
              "\n" +
              "Life Is Beautiful manages to walk the extremely thin line between humor, fantasy, and tragedy. Sure, the film is clearly comedic, but nevertheless it manages to very effectively communicate the tremendous losses suffered in the Nazi concentration camps and has scenes at least as intense as any scene in Schindler's List.\n" +
              "\n" +
              "This is one of the best films that I have ever seen. It manages to be so encompassing that you hardly notice the subtitles are even there. I proudly cast my vote of 10."
        },
        {
            id: 2,
            review: "This may be one of the best films ever made. I've never seen a movie with such a balance of hysterical comedy and serious drama. Roberto Benigni totally deserved his Oscars. People on this site have said such negative things about him and this film. Mr. Benigni had a lot of guts to make this film, and there's not another film like it. He handled both the comedy and drama aspects beautifully. I loved the beautiful cinematography, scenery, and the characters. This movie is magnificent in every way. Don't miss it!"
        },
        {
            id: 3,
            review: "It makes you cry while laughing, creates an emotional harmony. Guido is an amazing character and acting. The script describes the possible pain very well. Trying to make hell beautiful, Guido is an unforgettable character. It's the best movie I've seen recently. It is very different from the exaggerated bestseller list of IMDb Top 250"
        },
        {
            id: 0,
            review: "Emotional extremes abound, this story takes you round and around, elevating high, then smashing you down, your guiding light, an endearing clown.\n" +
                "\n" +
                "The essence of all that's right, that's wrong, a fathers love for his wife and son, to the thieves of liberty with power - and a gun; the worst of man, the world undone."
        },
        {
            id: 1,
            review: "I find it sad that so many people are so narrow-minded that they will not watch a movie that is black and white or, in this case, is subtitled. I feel sorry for people who refuse to watch a movie like Life Is Beautiful just because it is a foreign film. They have no idea what a beautifully acted and directed film this is, and they'll never know what an amazing experience they are missing.\n" +
                "\n" +
                "Life Is Beautiful manages to walk the extremely thin line between humor, fantasy, and tragedy. Sure, the film is clearly comedic, but nevertheless it manages to very effectively communicate the tremendous losses suffered in the Nazi concentration camps and has scenes at least as intense as any scene in Schindler's List.\n" +
                "\n" +
                "This is one of the best films that I have ever seen. It manages to be so encompassing that you hardly notice the subtitles are even there. I proudly cast my vote of 10."
        },
        {
            id: 2,
            review: "This may be one of the best films ever made. I've never seen a movie with such a balance of hysterical comedy and serious drama. Roberto Benigni totally deserved his Oscars. People on this site have said such negative things about him and this film. Mr. Benigni had a lot of guts to make this film, and there's not another film like it. He handled both the comedy and drama aspects beautifully. I loved the beautiful cinematography, scenery, and the characters. This movie is magnificent in every way. Don't miss it!"
        },
        {
            id: 3,
            review: "It makes you cry while laughing, creates an emotional harmony. Guido is an amazing character and acting. The script describes the possible pain very well. Trying to make hell beautiful, Guido is an unforgettable character. It's the best movie I've seen recently. It is very different from the exaggerated bestseller list of IMDb Top 250"
        }
    ]
    return(
      <div>
          <Navbar />
          <div style={{marginTop: '80px'}}>
              <h1>All Reviews: </h1>
              {reviews.map((rv) => {
                  return(
                    <Card key={rv.id} style={{padding: '10px', fontStyle: 'italic', fontSize: '18px', marginBottom: '30px', borderRadius: '5px', height: 'auto', width: '100%', backgroundColor: 'lavender'}}>
                        <CardBody>
                            {rv.review}
                        </CardBody>
                    </Card>
                  );
              })}
          </div>
      </div>
    );
}

export default MovieReview