import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Role } from "../enums.js";
import { ROLES_KEY } from "../decorators/role.decorator.js";

@Injectable()
export class RoleGuard implements CanActivate{

    constructor(private readonly reflector: Reflector){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const roles = this.reflector.getAllAndOverride<Role[]>(
            ROLES_KEY,
            [
                context.getHandler(),
                context.getClass()
            ]
        )
        
        if(!roles.length){
            return true;
        }

        const request = context.switchToHttp().getRequest();

        const userRole = request.headers.role;

        return roles.includes(userRole);
    }
}