import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { GridExpandMoreIcon } from '@mui/x-data-grid'


const CasesAcordeon = ({Cases}) => {
   
const sliceCases = Cases?.slice(0,5);

console.log(sliceCases);

  return (
    <div>
        {
            sliceCases.map( (res) =>{
                const minCasesID= res.id?.slice(-7);
           return(
            <Accordion key={res?.id}  sx={{mt:2,mb:2 ,backgroundColor: "#eeeeee" }}>
                <AccordionSummary
                expandIcon={<GridExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography sx={{ fontSize: 16 }}><b>Caso: {minCasesID}</b> </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <h1>dd</h1>
                </AccordionDetails>
            </Accordion>      
           )
            }
            )
        }                              
    </div>
  )
}

export default CasesAcordeon