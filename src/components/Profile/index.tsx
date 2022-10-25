import { useState, useCallback, useEffect } from "react";
import {
  ProfileContainer,
  ProfileInfo,
  ProfileInfoTitle,
  ProfileSocial,
} from "./styles";
import axios from "axios";
import { Buildings, GithubLogo, Share, Users } from "phosphor-react";

interface UserProps {
  avatar_url: string;
  company: string;
  bio: string;
  name: string;
  login: string;
  html_url: string;
  twitter_username: string;
  followers: number;
  following: number;
}

export function Profile() {
  const [user, setUser] = useState<UserProps>();

  const fetchUser = useCallback(async (query?: string) => {
    try {
      const response = await axios.get(import.meta.env.VITE_GITHUB_USER_API);

      setUser(response.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  console.log(user);

  return (
    <ProfileContainer>
      <div>
        <img src={user?.avatar_url} alt={user?.name} />
      </div>
      <ProfileInfo>
        <ProfileInfoTitle>
          <h2>{user?.name}</h2>
          <a href={user?.html_url}>
            GITHUB <Share />
          </a>
        </ProfileInfoTitle>
        <p>{user?.bio}</p>
        <ProfileSocial>
          <span>
            <GithubLogo size={20} weight="fill" /> {user?.login}
          </span>
          <span>
            <Buildings size={20} weight="fill" /> {user?.company}
          </span>
          <span>
            <Users size={20} weight="fill" /> {user?.followers} seguidores
          </span>
        </ProfileSocial>
      </ProfileInfo>
    </ProfileContainer>
  );
}
