import React, { useState } from 'react'
import {images} from '../../constants'
import './Part1.css'



const reviews =[
  {
    msg:"Being an international student, I needed reliable dissertation help, and ProjectsDeal exceeded my expectations. Their team provided exceptional dissertation, ensuring my literature review was comprehensive and aligned with my research objectives. Their expert writers delivered a well-structured and cohesive complete dissertation. I'm grateful for their assistance!",
    user:"Chinedu Okonkwo"
  },
  {
    msg:"Being a PhD candidate, I often struggle with the extensive literature review required for my dissertation. However, ProjectsDeal came to my rescue. Their team of experts provided invaluable guidance and assistance in conducting a comprehensive literature review, enabling me to excel in my research. I'm truly grateful!",
    user:"David Wilson"
  },
  {
    msg:"As a postgraduate student, I needed reliable dissertation help to meet the demands of my program. ProjectsDeal proved to be the perfect choice. Their writers conducted an in-depth literature review, ensuring the foundation of my dissertation was strong. They delivered a well-researched and well-written dissertation. Thank you!",
    user:"Emma Thompson"
  },
  {
    msg:"ProjectsDeal has been my go-to source for law dissertation help. Their writers have a deep understanding of conducting research and deliver well-researched and engaging dissertation. I couldn't have asked for better final dissertation!",
    user:"Jennifer Thompson"
  },
  {
    msg:"I was struggling with my dissertation and was running out of time. ProjectsDeal came to my rescue and provided me with exceptional support. They ensured that my literature review was extensive and provided a solid theoretical framework for my research. Highly impressed!",
    user:"Rajesh Kumar"
  },
  {
    msg:"As an international student, I found ProjectsDeal to be a reliable source for dissertation help. Their expertise in conducting dissertation research and providing timely feedback helped me complete my research with ease. I am grateful for their support!",
    user:"Fatima Hassan"
  },
]



const Part1 = () => {


  const [val,setVal] = useState(0);


  function increment(val){
    setVal((val+1)%reviews.length)
  }

  function decrement(val){
    if(val===0){
      setVal(reviews.length-1)
    } else {
      setVal(val-1)
    }
  }




  return (
    <div className='part1 space-y-4'>
        <div className=' text-center'>
            <h3 className='text-3xl py-5 text-yellow-500 '>Dissertation Writing Services UK</h3>
        </div>
        <div>
          <p>Projectsdeal is the UK's only dissertation writing service that is consistently awarded the title of "No.1 Dissertation Writing Service" by every major public review platform, including Google, TrustPilot, Sitejabber, Yell, and Yelp, with all reviews receiving a perfect 5-star rating. The rationale behind this achievement is simple: We Deliver! We go to the extreme ends to ensure our Clients are Happy and Super Successful. And that's Non-Negotiable for us.
            <br/>
            We have been, we are, and we will always be the Most Loved & Trusted Dissertation Writing Service in the UK. We are proud, & you will be too! We are proud of our achievements & flawless track record. Please read our reviews:
          </p>
        </div>
        <ul className='reviews flex justify-center items-center space-x-4 py-5'>
          <li><img src={images.google} alt='google' /></li>
          <li><img src={images.sitejabber} alt='sitejabber'/></li>
          <li><img src={images.trustpilot} alt='trustpilot' /></li>
          <li><img src={images.yelp} alt='yelp' /></li>
          <li><img src={images.yell} alt='yell' /></li>
          <li><img src={images.fb} alt='fb' /></li>
        </ul>
        <div className='text-center'>
          <h1 className='text-4xl py-5 text-yellow-600 font-medium'>We specialise in Essays, Assignments, Courseworks, Online exams, and Dissertation Writing Services, Since 2001!</h1>
        </div>
        <div>
          <p>We have literally delivered success and helped thousands of anxious and vulnerable students, many many of your senior and super seniors peers, with Assignments, Coursework, Online exams, and Dissertations. We understand and appreciate the challenges you face in juggling your job, studies, family, your ugly and demanding supervisor, and we feel responsible that your career and literally your life depends on your Results. We have delivered success, Since 2001, So now it's effortless to deliver exactly what your supervisor is looking for. If you study in UK, you can please focus on your other important priorities while we look after your academic success. Effortlessly!</p>
        </div>
        <div className='flex flex-col items-center'> 
          <h2 className=' text-center text-4xl py-8'>Just Sit Back Relax & Consider Your Work Done!!</h2>
          <img src={images.order} width={250} alt='order'/>
        </div>
        <div>
          <p>Projectsdeal is the <b>best dissertation writing services in the UK</b>, with all 5 star reviews. Our team of experienced British writers will craft your dissertation with a research-oriented approach, ensuring exceptional quality. Our dissertation writers will diligently work on your dissertation, making it engaging and captivating, ultimately helping you score distinction. Projectsdeal has years of experience in the industry, making it one of the top dissertation writing service in UK. All of our dissertation helpers are veteran writers and research experts with several years of expertise. We are hailed as the best dissertation help for providing PhD thesis, assignments and essay writing.</p>
        </div>
        <div className='featurediv flex'>
          <iframe width="590" height="330" src="https://www.youtube-nocookie.com/embed/YVbMIIdpvWQ?si=W3CEewKq_iwD_QCD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <ul className='features'>
            <li><img src={images.check} alt='check'/>Established 2001</li>
            <li><img src={images.check} alt='check'/>24 Years of Successful Track Record</li>
            <li><img src={images.check} alt='check'/>PhD Qualified Writers</li>
            <li><img src={images.check} alt='check'/>Top Notch Quality</li>
            <li><img src={images.check} alt='check'/>Enjoy Full Confidentiality</li>
            <li><img src={images.check} alt='check'/>Plagiarism Free</li>
            <li><img src={images.check} alt='check'/>Free Unlimited Revisions</li>
            <li><img src={images.check} alt='check'/>Professional Project Management</li>
            <li><img src={images.check} alt='check'/>5 star Reviews on Google, SiteJabber, TrustPilot</li>
            <li><img src={images.check} alt='check'/>600+ Domain Experts</li>
            <li><img src={images.check} alt='check'/>46 Project Coordinators</li>
            <li><img src={images.check} alt='check'/>Guaranteed Grades</li>
          </ul>
        </div>

        <div className='flex flex-col items-center pt-10'>
          <h2 className='text-4xl text-sky-700 text-center'>For Urgent Deadlines WhatsApp us</h2>
          <div className='flex p-2 bg-green-400 items-center justify-center rounded-md text-white text-lg'>
            <i class='bx bxl-whatsapp'></i>
            <a href='#'>WhatsApp +44 7447882377</a>
          </div>
        </div>

        <div>
          <p>When it comes to hiring Best Dissertation Writing Service in London trust becomes one of the major concerns for students. Students have many concerns regarding the methodology, deadlines, quality of work, pricing, experience of the British writers, plagiarism, and revisions or amendments etc. We are so good that the results of our works speak for themselves as more than 82% of our clients have bagged for themselves Merits and Distinctions. Balancing your odd Job, other imp priorities and Score!
            <br/>
            A dissertation determines your overall grade and can either help your academic career or break it. It requires investing time, energy, motivation and skills such as research skills in order to do a great job. However, to ensure that your dissertation is not only accepted but also wins you a great grade and high regard, you must present an original dissertation that fulfills the objectives it has indicated. It should be well-researched, coherent and a demonstration of knowledge applied in solving a real life situation effectively.
          </p>
        </div>


        <div>
          <h1 className=' text-4xl text-center text-sky-700 py-8'>What makes Projectsdeal UK #1 Dissertation Writing Service</h1>
          <div className='services'>
            <div>
              <img src={images.like2} className=' rounded-full' alt='like2'/>
              <h2>Premium Quality</h2>
              <p>Projectsdeal is Gold Standard in Academic Research & Writing</p>
            </div>
            <div>
              <img src={images.restrict} className=' rounded-full' alt='restrict'/>
              <h2>Plagiarism Free</h2>
              <p>Use Official License of Turnitin to Validate  &lt; 6% plagiarism</p>
            </div>
            <div>
              <img src={images.timer} className=' rounded-full' alt='timer'/>
              <h2>Meeting Deadline</h2>
              <p>Projectsdeal team values on-time submission. We deliver before the deadline. Relax!</p>
            </div>
            <div>
              <img src={images.lock} className=' rounded-full' alt='lock'/>
              <h2>100% Privacy</h2>
              <p>Follow Strict Code of Confidentiality. We are known for HIGH Business Ethics.</p>
            </div>
          </div>

          <div className='services'>
            <div>
              <img src={images.doller} className=' rounded-full' alt='doller'/>
              <h2>Affordable Prices</h2>
              <p>Every year if more than 80% of your own class can afford it, you can surely! Your work be worth every pound spend.</p>
            </div>
            <div>
              <img src={images.phone} className=' rounded-full' alt='phone'/>
              <h2>Dedicated Team</h2>
              <p>Dedicated Personal Managers to ensure high level of service experience.</p>
            </div>
            <div>
              <img src={images.doc2} className=' rounded-full' alt='doc2'/>
              <h2>Free Revision</h2>
              <p>We understand that your supervisor is our client! We prioritize your success above all else, so feel free to request any number of modifications.</p>
            </div>
            <div>
              <img src={images.payback} className=' rounded-full' alt='payback'/>
              <h2>Payback Guarantee</h2>
              <p>Our Terms & Conditions are designed with Fair Usage and SOLID Guarantees to ensure success! Result is all that matters!</p>
            </div>
          </div>
        </div>


        <div className='text-center flex flex-col items-center justify-center'>
          <h2 className='text-5xl font-semibold text-red-500 py-4'>Simply get rid of your Dissertation worries Now:</h2>
          <ul className=' font-light text-2xl space-y-2'>
            <li>1. Just select your domain</li>
            <li>2. Choose the exact word count</li>
            <li>3. Select the final submission date</li>
            <li>4. Get instant pricing</li>
          </ul>
          <img src={images.pricing} alt='pricing'/>
        </div>
        

        <div>
          <div className=' bg-gray-200 p-9'>
            {
              <div className='text-center space-y-4'>
                <p>{reviews[val].msg}</p>
                <p>★★★★★</p>
                <p><i>- {reviews[val].user}</i></p>
              </div>
            }
          </div>
          <div className='text-center space-x-6 p-5'>
            <button onClick={()=> decrement(val)} className='p-2 bg-sky-100 rounded-lg'>Previous</button>
            <button onClick={()=> increment(val)} className='p-2 bg-sky-100 rounded-lg'>Next</button>
          </div>
        </div>

        <div className='text-xl space-y-4'>
          <h3 className='text-center text-sky-800 text-3xl'>How we consistently achieve Merits and Distinctions in Dissertations?</h3>
          <p>To produce such a dissertation and get high marks for it, you need to know how a dissertation is evaluated so that you can tailor it for a great evaluation. While these evaluations differ among different departments or universities the criteria is pretty much the same and may include the following:</p>
          <ul className=' list-disc space-y-2'>
            <li>Emphasis is mainly placed on the skill with which you have used the research methods to obtain scientifically presented findings as well as masterfully draw conclusions from these results.</li>
            <li>The dissertation should be original and relevant as well as demonstrate your ability to thoroughly conduct a research study.</li>
            <li>Your literature review should be relevant and very specific to your topic instead of an account of general information related to your field of study. The review should be both descriptive and critically analyze previous works while explicitly showing how his research methodology and the review are linked.</li>
            <li>The dissertation you present should have the research methodology appropriate and justified. You should minimize the likelihood of bias and limitations.</li>
            <li>The findings from your research should answer your research questions as well as meet your objectives. There should be no doubt as to the testing of your hypotheses.</li>
            <li>Your results should be well presented such that the patterns can be clearly identified and have been summarized.</li>
            <li>In your discussion, make a point of analyzing the main points first and speculations or reconceptualization should be well-founded in the results presented as well as linked to literature. Results should be interpreted exhaustively and innovatively related to the research hypothesis.</li>
            <li>The reference list should give a complete and accurate account of sources used in the dissertation.</li>
            <li>Finally, there should be some recommendations for future studies.</li>
            <li>Once the evaluation is done by supervisors and advisors who propose a grade that is either confirmed or rejected by a board of examiners, the final grade is given.</li>
          </ul>
          <h4 className=' font-bold'>We Make Dissertation Writing Easier!</h4>
          <p className=' '>With our dissertation writing help will make writing your dissertation easier. We put our wealth of experience into use and making us reliable and accurate dissertation help and writing services. We guarantee you the best through our time-proven research and thesis writing service. We are your go-to dissertation writing help provider, ensuring that your dissertation meets your university specifications. Our experience spans across all major universities in UK, where we have consistently delivered exceptional results with all 5 star reviews on all platforms. With our expertise, we are committed to providing the highest quality dissertation assistance to students from all academic backgrounds.</p>
        </div>


        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-center text-4xl font-medium my-7'>Simply relieve yourself from your dissertation worries in just 1 step:</h2>
          <button className='p-3 bg-sky-600 uppercase text-white rounded-xl mb-16'>Learn More</button>
          
          <div className='cardsdiv flex'>
            <div className='cards flex justify-center'>
              <div className='card-box'>
                <img src={images.like} alt='like'/>
                <p className='text-center'>Ask any 5 of your Own Classmates & we bet at least 3 of them would already be our clients!</p>
              </div>
              <div className='card-box'>
                <img src={images.doc} alt='doc'/>
                <p className='text-center'>Over 96% of our clients have scored Merits & Distinctions Since 2001, It's effortless now!</p>
              </div>
            </div>

            <div className='cards flex justify-center'>
              <div className='card-box'>
                <img src={images.g100} alt='g100'/>
                <p className='text-center'>Intermediate drafts & Unlimited number of Revisions to flawlessly meet the Supervisors thought process</p>
              </div>
              <div className='card-box'>
                <img src={images.clock} alt='clock'/>
                <p className='text-center'>100% Confidentiality, 0% Plagiarism on turnitin, Get Ready for Submission Work</p>
              </div>
            </div>
          </div>
        </div>


        <div className='text-xl space-y-6'>
            <div className='text-center py-5'>
              <h3 className=' text-3xl'>Frequently Asked Questions</h3>
            </div>
            <div>
              <p>What do you need to start writing my dissertation ? In order to write your dissertation, we'll need the following:</p>
              <p>1. Dissertation handbook, Proposal approved by university, ethics form</p>
              <p>2. A full list of requirements, deadlines, and expectations of your work.</p>
            </div>
            <div>
              <p>Can you do my dissertation?</p>
              <p>Yes. Our experienced team can handle all aspects, including topic selection, dissertation proposal help, ethics forms, questionnaire, data collection, and analysis. We will conduct a thorough literature review, ensuring that the latest and most relevant references are incorporated into your dissertation. We carefully consider all your comments and requirements. With our years of expertise, our writers provide precise recommendations and conclusions to add value to your research field. Our aim is to provide you with a fully ready-for-submission dissertation that includes proper research and referencing to guarantee excellent grades.</p>
            </div>
            <div>
              <p>How do I get reliable dissertation help services in the UK?</p>
              <p>We maintain 100% confidentiality as we understand the importance of results to your life, to your career. The massive amount of expectations the supervisors and the university has of you in known to us. All out clients for the last 20 years are all students from PhD, Masters and undergraduate. We conduct knowledge transfer sessions so you can also learn while you score! Your entire career, your entire life depends on your Scorecard. Hence we have multiple intermediate interactions to ensure all of us work as one team and progress together on your Essay, Coursework, Dissertation. So, please be assured!</p>
            </div>
        </div>



        <div className='py-3'>
          <div>
            <h1 className='text-center text-3xl text-yellow-600'>Awarded Best Dissertation Writing Service in the UK - <span className=' text-lg text-blue-800'>Press Recognition</span></h1>
          </div>
          <div className='press gap-2 pt-10'>
            <img src={images.yahoo}  alt='yahoo'/>
            <img src={images.bbc} alt='bbc'/>
            <img src={images.khaleej} alt='khaleej'/>
            <img src={images.guardian} alt='guardian'/>
            <img src={images.benzinga} alt='benzinga'/>
          </div>
        </div>

        <div className='space-y-7'>
          <div>
            <p>Why is PROJECTSDEAL the popular choice and ranked as the best dissertation writing services in UK?</p>
            <p>The very reason https://projectsdeal.co.uk is clearly Ranked No.1 on every single platform for over 20 years in a row is because we have a flawless trackrecord since 2001. We are the UK's first Dissertation and Coursework Writing Company. We are the Biggest team of over 600 full time seasoned professionals like project coordination teams, Domain experts, Sophisticated academic Writers, Senior proof readers, and we are blessed with very very dependable and superior leadership.</p>
          </div>
          <div>
            <p>Can someone write my dissertation if I do not have the project title?</p>
            <p>We first have to define the precise research title for your research. Meaning we must start by narrowing down your exact area of research and consolidate that into a meaningful dissertation title. After that you have to get it approved from your supervisor. Once the Dissertation title is approved we can start with the Dissertation Proposal. The Dissertation Proposal must have a very clearly defined Aim of our research, followed by perfectly established research objectives we need to meet by the end of our research and clear Research Questions. We need latest references from important journals and identify right authors to refer to. This is what we do, we continuously research and write Dissertations and Research papers and hence we give you full leverage of our expertise. Please <span className='p-2 bg-green-500 rounded-md text-white'><a href='#'>WhatsApp +44 7447882377</a></span> and we shall personally have a detailed discussion and help you more meaningfully.</p>
          </div>
          <div>
            <p>Can you please brief me about the process?</p>
            <p>Lets define the exact word count and the deadline. For your Dissertation we can help you define the title in your area of interest and start step by step to define the research proposal and take it forward chapter wise. Once we define the exact deliverable and the deadline. We shall offer you the professional fees for our help. After that we shall process your payment formalities and onboard you. You will have your unique project id along with your dedicated project coordinator. So we can progress step by step and work as one team all along. You can check the detailed process of how we work.</p>
          </div>
          <div>
            <p>What qualifications do your dissertation writers have?</p>
            <p>All of our writers come with a lot of experience in dissertation writing. They hold Master and Ph.D. degrees from reputed universities. They have published their own papers and possess extensive knowledge in all domains & degrees (Mangement, Marketing, Nursing, Law, Undergrad, Masters, PhD thesis writing service). Their experienced writers enable them to write dissertations in a wide range of fields. Moreover, they're skilled at writing 100% academic dissertation, Since 2001.</p>
          </div>
          <div>
            <p>Can I see some sample work?</p>
            <p>Here are some Dissertation Examples</p>
            <p>Sample 1 | Sample 2 | Sample 3</p>
          </div>
        </div>
        

        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-center font-bold text-4xl pt-14 pb-3'>Are you working with us for the First time? If Yes?</h1>
          <h2 className='text-center text-4xl pb-3'>Good News!! Click here to avail your Full First Order Discount instantly:</h2>
          <button className='p-3 bg-sky-600 uppercase text-white rounded-xl my-12'>Learn More</button>
          <div className='space-y-6'>
            <div>
              <p>How long is a dissertation?</p>
              <p>An average dissertation has a word count between 7,000 to 20,000 words. But different universities set different word limits for dissertation. So, be sure to check the word limit with your university.</p>
            </div>
            <div>
              <p>What is the general dissertation structure?</p>
              <p>Generally, dissertation structure in the UK includes the following: Title Page, Acknowledgment, Abstract, Introduction, Literature Review, Aims and Objectives, Research Analysis, Methodology, Results Discussion Chapters, General Discussion, Conclusion and Contribution - Implications and Future Directions</p>
            </div>
            <div>
              <p>Can I contact you at any time?</p>
              <p>Yes. ProjectsDeal allocated a personal project manager as soon as the dissertation order is placed. Our team is available 24/7 in order to assist you whenever you need us. Feel free to email us or contact us via WhatsApp. Manager will be available till final successful submission.</p>
            </div>
          </div>
        </div>


        <div>
          <h2 className='text-center text-3xl text-yellow-600 py-9'>Why Students should take help of Top Dissertation Writing Services?</h2>
          <div className='help flex items-center justify-center'>
            <iframe width="1090" height="315" src="https://www.youtube.com/embed/PPFFr51UkS8?si=6fV6wigPB1rXQRSe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='space-y-5'>
              <div>
                <h3>Right topic selection:</h3>
                <p>Projectsdeal will give you viable topics that wont make you hit a roadblock. We recommend latest dissertation topic that is interesting, with lot of research and contribution scope.</p>
              </div>
              <div>
                <h3>More access to the library and research data:</h3>
                <p>We have more access to the library than you will ever get, thus making us get more primary and secondary research material than you.</p>
              </div>
              <div>
                <h3>Years of experience and team of expert domain writers:</h3>
                <p>Our writers have more experience than you because they have written so many dissertations for several individuals, and this goes on every year. We can easily help you score your desired grades.</p>
              </div>
            </div>
          </div>
          <p>You can calculate custom cost online and order online. Within 15 minutes, Personal project manager would be assigned, experienced dissertation writers will start your work. Allocated manager shall stay in touch with you on whatsapp till final successful submission.</p>
        </div>


        <div className='flex flex-col justify-center items-center py-8'>
          <h2 className='text-4xl font-semibold py-4'>Just Sit Back Relax & Consider Your Work Done!!</h2>
          <img src={images.pricing} alt='pricing'/>
        </div>

    </div>
  )
}

export default Part1