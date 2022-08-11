import { Card, CardContent, CardHeader, IconButton, Skeleton } from '@mui/material'
import * as React from 'react'
import { UserData } from './interfaces'
import UserAvatar from './UserAvatar'

import buttonImg from './assets/addButton.svg'
import buttonImgDone from './assets/done.svg'

interface UserCardProps {
	user?: UserData,
	loading?: boolean
}

const UserCard = (props: UserCardProps) => {
	
	const [isDone, setIsDone] = React.useState<boolean>(false);

	const actionbutton = isDone ? buttonImgDone: buttonImg;
	return (<Card classes={{root: "cardUser"}} sx={{width:"366px", paddingTop: "15px"}}>
				<CardHeader avatar={
								<UserAvatar user={props.user} loading={props.loading} />
							}
							title={props.loading ? 
									null : 
									<span style={{fontSize: "17px", "fontWeight": "bold"}}>
										{props.user?.first_name ?? ""} 
										{props.user?.last_name ?? ""}
									</span>}
							subheader={props.loading ? null :<span>nessuna connessione</span>}
							action={
								props.loading ? null :
								<IconButton aria-label="settings" onClick={()=>{setIsDone(true)}}>
									<img src={actionbutton}/>
								</IconButton>
							}
				>
				</CardHeader>
				<CardContent sx={{
					backgroundColor: "#EAE8FE",
					color: "#8463E7",
					textAlign: "center",
					dislay: "flex",
					justfyContent: "center"
				}}>
					{props.loading ? 
						<Skeleton animation="wave" height={21} width="60%" /> : 
						<span style={{fontSize: "14px"}}>
							Sta già condividendo <strong>{props.user?.shared_service ?? ""}</strong>
						</span>
				}
				</CardContent>
			</Card>)
}

export default UserCard 