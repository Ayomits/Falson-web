import { Badges, GuildType, LanguageType } from "@/types/guilds";

export type VerificationEmbedResponse = {
  guildId: string;
  title: string;
  description: string;
  thumbnail: string;
  image: string;
  footer: {
    url: string;
    value: string;
  };
  author: {
    url: string;
    value: string;
  };
};
export type DeleteResponse = { message: string };

export type GuildResponse = {
  guildId: string;
  type: number;
  createdAt: Date;
  trustedRoles: string[];
  badges: Badges[];
  interfaceLanguage: LanguageType;
};

export type GuildMemberResponse = {
  guildId: string;
  joinedTimestamp: number;
  premiumSinceTimestamp: Date | null;
  nickname: string | null;
  pending: boolean;
  communicationDisabledUntilTimestamp: Date | null;
  userId: string;
  avatar: string | null;
  flags: number;
  globalName: string;
  roles: string[];
  avatarURL: string | null;
  displayAvatarURL: string;
};

export type VerificationVoiceResponse = {
  guildId: string;
  verificationCategories: string[];
  verificationIgnoredChannels: string[];
  verificationStaffFullAccess: string[];
  verificationStaffCurators: string[];
  verificationStaffSupport: string;
};

export type VerificationGeneralResponse = {
  guildId: string;
  verificationRoles: string[];
  unverifyRole: string;
  type: GuildType;
};

export type VerificationTraditionResponse = {
  guildId: string;
  channelId: string;
  isDouble: boolean;
};

export type VerificationLogsResponse = {
  feedbacksLog: string;
  acceptionLog: string;
  verificationLog: string;
};

export type UserResponse = {
  userId: string;
  type: number;
};

export type UserDiscordResponse = {
  id: string;
  username: string;
  avatar: string | null;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: null;
  accent_color: number;
  global_name: string | null;
  avatar_decoration_data: {
    asset: string | null;
    sku_id: string | null;
  };
  banner_color: string | null;
  clan: {
    identity_guild_id: string | null;
    identity_enabled: true;
    tag: string | null;
    badge: string | null;
  } | null;
  mfa_enabled: boolean;
  locale: string;
  premium_type: number;
};

export type UserGuildResponse = {
  guildId: string;
  icon: string | null;
  name: string;
  invited: boolean;
};

export type UserGuildsResponse = UserGuildResponse[];
