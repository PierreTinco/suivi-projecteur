export interface Projecteur {
    name? : string;
    connexion? : string;
    status? : string;
    url: string,
    alreadyAlert: boolean,
    ws: WebSocket
}