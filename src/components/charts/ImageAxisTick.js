import { PureComponent } from "react";
import atl from '../../resources/atlanta.png';

class ImageAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    const mapping = {
      "ATL": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/MLS_crest_logo_RGB_-_Atlanta_United_FC.svg/1200px-MLS_crest_logo_RGB_-_Atlanta_United_FC.svg.png",
      "CHI": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/MLS_crest_logo_RGB_-_Chicago_Fire_2022.svg/1938px-MLS_crest_logo_RGB_-_Chicago_Fire_2022.svg.png",
      "CLB": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/MLS_crest_logo_RGB_-_Columbus_Crew_SC.svg/969px-MLS_crest_logo_RGB_-_Columbus_Crew_SC.svg.png",
      "COL": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/MLS_crest_logo_RGB_-_Colorado_Rapids.svg/969px-MLS_crest_logo_RGB_-_Colorado_Rapids.svg.png",
      "DAL": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/MLS_crest_logo_RGB_-_FC_Dallas.svg/1938px-MLS_crest_logo_RGB_-_FC_Dallas.svg.png",
      "DC": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/MLS_crest_logo_RGB_-_D.C._United.svg/1200px-MLS_crest_logo_RGB_-_D.C._United.svg.png",
      "HOU": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/MLS_crest_logo_RGB_-_Houston_Dynamo_2021.svg/969px-MLS_crest_logo_RGB_-_Houston_Dynamo_2021.svg.png",
      "KC": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/MLS_crest_logo_RGB_-_Sporting_Kansas_City.svg/969px-MLS_crest_logo_RGB_-_Sporting_Kansas_City.svg.png",
      "LA": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/MLS_crest_logo_RGB_-_LA_Galaxy.svg/1200px-MLS_crest_logo_RGB_-_LA_Galaxy.svg.png",
      "LAFC": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/MLS_crest_logo_RGB_-_Los_Angeles_FC.svg/1200px-MLS_crest_logo_RGB_-_Los_Angeles_FC.svg.png",
      "MNUFC": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/MLS_crest_logo_RGB_-_Minnesota_United_FC.svg/1200px-MLS_crest_logo_RGB_-_Minnesota_United_FC.svg.png",
      "MTL": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/MLS_crest_logo_RGB_-_CF_Montreal_2021.svg/1938px-MLS_crest_logo_RGB_-_CF_Montreal_2021.svg.png",
      "NE": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/MLS_crest_logo_RGB_-_New_England_Revolution.svg/1200px-MLS_crest_logo_RGB_-_New_England_Revolution.svg.png",
      "NYCFC": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/MLS_crest_logo_RGB_-_New_York_City_FC.svg/969px-MLS_crest_logo_RGB_-_New_York_City_FC.svg.png",
      "NYRB": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/MLS_crest_logo_RGB_-_New_York_Red_Bulls.svg/1938px-MLS_crest_logo_RGB_-_New_York_Red_Bulls.svg.png",
      "ORL": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/MLS_crest_logo_RGB_-_Orlando_City_SC.svg/969px-MLS_crest_logo_RGB_-_Orlando_City_SC.svg.png",
      "PHI": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/MLS_crest_logo_RGB_-_Philadelphia_Union_2018.svg/969px-MLS_crest_logo_RGB_-_Philadelphia_Union_2018.svg.png",
      "POR": "https://upload.wikimedia.org/wikipedia/commons/b/b0/MLS_crest_logo_RGB_-_Portland_Timbers_2019.svg",
      "RSL": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/MLS_crest_logo_RGB_-_Real_Salt_Lake.svg/969px-MLS_crest_logo_RGB_-_Real_Salt_Lake.svg.png",
      "SEA": "https://upload.wikimedia.org/wikipedia/commons/b/b7/MLS_crest_logo_RGB_-_Seattle_Sounders_FC.svg",
      "SJ": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/MLS_crest_logo_RGB_-_San_Jose_Earthquakes.svg/1938px-MLS_crest_logo_RGB_-_San_Jose_Earthquakes.svg.png",
      "TOR": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/MLS_crest_logo_RGB_-_Toronto_FC.svg/969px-MLS_crest_logo_RGB_-_Toronto_FC.svg.png",
      "VAN": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/MLS_crest_logo_RGB_-_Vancouver_Whitecaps_FC.svg/969px-MLS_crest_logo_RGB_-_Vancouver_Whitecaps_FC.svg.png"
    }

    return (
      <g transform={`translate(${x},${y})`}>
        {/* <image src={atl} style={{"width": "5px", "height": "5px"}}></image> */}
        <image xlinkHref={mapping[payload.value]} x={-10} y={0} height="20px" width="20px" textAnchor="middle" fill="#666" />
        <text x={-25} y={0} dy={5} textAnchor="end" fill="#666" transform="rotate(-90)">
          {payload.value}
        </text>
      </g>
    );
  }
}

export default ImageAxisTick;