import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicButton from '../../common/BasicButton/BasicButton';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import { ButtonGroup, Grid } from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Box } from '@mui/system';

const CreateCases = () => {
    return (
        <div>
            <br/>
            <h1>Casos</h1>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>

                
                    
               

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                                </Typography><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                                </Typography><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                                </Typography><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                                </Typography><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                                </Typography><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                                </Typography><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                                </Typography><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                                </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center" >
                            <BasicButton
                                heights={200}
                                onClick={()=> console.log("Edit")}
                                startIcons={<ModeEditTwoToneIcon/>}
                                colors={"#2a3eb1"}
                        
                                />
                                <BasicButton
                                heights={200}
                                onClick={()=> console.log("Edit")}
                                startIcons={<DeleteTwoToneIcon/>}
                                colors={"#b2102f"}
                            
                                />
                        </Grid>
                    
                    </Grid>
                    
                    </Grid>
                
                </CardContent>

            </Card>
        </div>
    );
}

export default CreateCases;
