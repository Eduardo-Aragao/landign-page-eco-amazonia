import screenHome from '@/assets/screenshots/screen-home.jpeg';
import screenMaps from '@/assets/screenshots/screen-maps.jpeg';
import screenRegister from '@/assets/screenshots/screen-resgiter.jpeg';
import screenMyOccurrences from '@/assets/screenshots/screen-my-occurrences.jpeg';
import screenInfoOrganic from '@/assets/screenshots/screen-info-organico.jpeg';
import screenInfoRecycle from '@/assets/screenshots/screen-info-reciclaveis.jpeg';
import screenInfoSpecial from '@/assets/screenshots/screen-info-lixo-especiais.jpeg';

import gabrielPhoto from '@/assets/team/Gabriel-Mota.jpeg';
import davePhoto from '@/assets/team/Dave-Songnata.jpeg';
import daviPhoto from '@/assets/team/Davi-Brasil.png';
import enzoPhoto from '@/assets/team/Enzo-leiva.jpeg';
import raymondPhoto from '@/assets/team/Raymond-Lugo.jpeg';
import thiagoPhoto from '@/assets/team/Thiago-Massa.png';
import victorPhoto from '@/assets/team/Victor-Matthaus.png';

export const screenshots = {
  home: screenHome,
  maps: screenMaps,
  register: screenRegister,
  myOccurrences: screenMyOccurrences,
  infoOrganic: screenInfoOrganic,
  infoRecycle: screenInfoRecycle,
  infoSpecial: screenInfoSpecial,
} as const;

export type ScreenshotKey = keyof typeof screenshots;

export const teamPhotos = {
  gabriel: gabrielPhoto,
  dave: davePhoto,
  davi: daviPhoto,
  enzo: enzoPhoto,
  raymond: raymondPhoto,
  thiago: thiagoPhoto,
  victor: victorPhoto,
} as const;

export type TeamPhotoKey = keyof typeof teamPhotos;
