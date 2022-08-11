import { Avatar, Skeleton } from '@mui/material';
import { positions } from '@mui/system'
import * as sReact from 'react'
import { UserData } from './interfaces';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import userImg from "./assets/User.jpg"

interface UserAvatarProps {
	user?: UserData,
	loading?: boolean
}

const UserAvatar = (props: UserAvatarProps) =>{

	const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
	'& .MuiBadge-badge': {
		right: 37,
		top: -10,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
	}));

	if(props.loading) {
		return  <Skeleton animation="wave" variant="circular" width={80} height={80} />
	}

	return <StyledBadge
				overlap="circular"
				badgeContent={<Avatar  sx={{backgroundColor:"#6A3EEA",width:27, height: 27, fontSize: "13px"}} >{props.user?.trust ?? 0}</Avatar>}
			>
			<Avatar 
				alt={`${props.user?.first_name ?? ""} ${props.user?.last_name ?? ""}`} 
				sx={{width:80, height: 80}} 
				src={userImg}	
			/>
		</StyledBadge>
}

export default UserAvatar;