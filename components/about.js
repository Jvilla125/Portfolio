import Image from 'next/image';

export default function AboutMe() {
    return (
        <>
        
            <h1 class="text-center">About Me</h1>
            <div class="card mx-auto" style={{ width: "30rem" }}>
                <div class="card-body ">
                    <Image
                        class="rounded mx-auto d-block"
                        src="/ucsc.jpg"
                        width={250}
                        height={350}
                    />
                    <br />
                    <h5 class="card-title text-center">Jeffrey Villacorta</h5>
                    <p class="text-center">
                        <a class="btn btn-outline-light " data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Fun Facts About Me <i class="bi bi-arrow-down-short" style={{fontSize: "25px"}}></i>
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            <ul >
                                <li >I am Peruvian <p class="flag peru"></p> </li>
                                <li>I like to go for runs with my pet Husky</li>
                                <li>On my free time I am either at the gym, playing guitar, or spending time with my family.</li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <p class="card-text">I am a full stack software engineer that is super eager to learn and is always taking on new challenges. <br/> <br/> 
                    I previously worked for a commercial general contractor as a <u>project engineer</u> for over two years but decided that I wanted to make a career transition 
                    from construction management to software engineering. <br/><br/>
                    I recently graduated from <a target="_blank" href=" https://generalassemb.ly/education/software-engineering-immersive?&topic=&mkt_account_id=1056949875&mkt_campaign_id=1741487161&mkt_ad_group_id=68632981619&mkt_device_type=c&mkt_keyword=software%20engineering%20general%20assembly&mkt_matchtype=e&mkt_placement=&mkt_ad_id=549295011515&mkt_network=g&mkt_target_id=kwd-865210826802&mkt_feed_item_id=&utm_source=google&utm_medium=paid-search-bra&utm_campaign=TS:TX:BRA:LAX:BRTP:COD:SoftwareEngineering:GeneralAssembly&utm_content=PDP-FT&utm_term=software%20engineering%20general%20assembly&gclid=CjwKCAjw0N6hBhAUEiwAXab-TWTxm97rPeMQIgYH1lSWCqblJXDbU4-ecl6tj-HO18RUAaQD8UEIYhoC7wgQAvD_BwE&gclsrc=aw.ds">General Assembly's </a> 
                    software engineering bootcamp in October 2022 and I am continuing to learn new languages and frameworks. <br/><br/>
                    </p>
                </div>
            </div>
        </>
    )
}