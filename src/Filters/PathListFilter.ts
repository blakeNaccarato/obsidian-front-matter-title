import FilterInterface from "../Interfaces/FilterInterface";
import BlackWhiteListInterface from "../Components/BlackWhiteList/BlackWhiteListInterface";
import {inject, injectable} from "inversify";
import TYPES from "@config/inversify.types";

@injectable()
export default class PathListFilter implements FilterInterface {
    constructor(
        @inject(TYPES['components.black_white_list'])
        private list: BlackWhiteListInterface
    ) {
    }

    check(path: string): boolean {
        return this.list.isFileAllowed(path);
    }
}