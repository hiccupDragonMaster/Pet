import classNames from "classnames";
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import type { FC, PropsWithChildren } from "react";
import { useSidebarContext } from "../../contexts/SidebarContext";

const MainSidebar: FC<PropsWithChildren<Record<string, unknown>>> = function ({
    children,
}) {
    const { isOpenOnSmallScreens: isSidebarOpenOnSmallScreens } =
        useSidebarContext();

    return (
        <div
            className={classNames(
                "fixed overflow-auto transition-all left-0 top-0 h-full z-10 border border-t-0 xl:sticky xl:!block",
                {
                    //hidden: !isSidebarOpenOnSmallScreens,
                    "hideSidebar" : !isSidebarOpenOnSmallScreens,
                }
            )}
        >
            <FlowbiteSidebar>{children}</FlowbiteSidebar>
        </div>
    );
};

export default Object.assign(MainSidebar, { ...FlowbiteSidebar });