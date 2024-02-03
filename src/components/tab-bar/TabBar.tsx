import React, { FormEvent, Fragment, useEffect, useRef, useState } from "react";
import { ITabBar, ITabBarItem } from "./TabBar.types";
import { useTheme } from "styled-components";
import {
  Indicator,
  InnerWrapper,
  ItemsWrapper,
  OuterWrapper,
} from "./TabBar.style";
import Text from "../text/Text";
import Flex from "../flex";
import Icon from "../icon";

const TabBar = (props: ITabBar) => {
  const {
    data,
    onChange,
    defaultValueTab,
    labelTitle,
    showSeprator,
    sepratorColor,
    ...otherProps
  } = props;

  const theme = useTheme();

  const [tabDetails, setTabDetails] = useState({
    activeTab: 0,
    indicatorPosition: 0,
    indicatorWidth: `${(100 / data?.length).toFixed(1)}%`,
  });
  const tabWrapperRef = useRef<HTMLDivElement>(null);
  const tabItemRef = useRef<any>([]);

  const handleTabChange = (
    event: FormEvent<HTMLDivElement>,
    item: ITabBarItem,
    index: number
  ) => {
    if (tabWrapperRef?.current !== null) {
      const indicatorPosition =
        tabWrapperRef?.current.getBoundingClientRect().right -
        event?.currentTarget?.getBoundingClientRect().right;
      if (onChange) {
        onChange(item?.value);
      }
      setTabDetails({
        ...tabDetails,
        activeTab: index,
        indicatorPosition: indicatorPosition,
      });
    }
  };

  const handleDefaultTab = () => {
    if (defaultValueTab) {
      let index = data.findIndex((item) => item.value === defaultValueTab);

      if (tabWrapperRef?.current !== null) {
        const indicatorPosition =
          tabWrapperRef.current?.getBoundingClientRect().right -
          tabItemRef?.current[index]?.getBoundingClientRect().right;
        setTabDetails({
          ...tabDetails,
          activeTab: index,
          indicatorPosition: indicatorPosition,
        });
      }
    }
  };

  const lightItemTextColor = (index: number) => {
    if (tabDetails.activeTab === index) {
      return 7;
    } else {
      return 1;
    }
  };

  const lightItemIconColor = (index: number) => {
    if (theme.isDark) {
      if (tabDetails.activeTab === index) {
        return "#53C5D0";
      } else {
        return "#FFFFFF";
      }
    } else {
      if (tabDetails.activeTab === index) {
        return "#5439AC";
      } else {
        return "#56596A";
      }
    }
  };

  useEffect(() => {
    handleDefaultTab();
    // eslint-disable-next-line
  }, [defaultValueTab, data.length]);

  useEffect(() => {
    if (tabItemRef?.current) {
      tabItemRef.current = tabItemRef?.current?.slice(0, data?.length);
    }
  }, [data]);

  return (
    <OuterWrapper component="div" labelTitle={!!labelTitle} {...otherProps}>
      {labelTitle && <Text variant="body">{labelTitle}</Text>}
      <InnerWrapper labelTitle={!!labelTitle}>
        <Flex ref={tabWrapperRef}>
          <Indicator
            style={{
              right: `${tabDetails.indicatorPosition}px`,
              width: tabDetails.indicatorWidth,
            }}
          />
          {data.map((item: ITabBarItem, index: number) => {
            const isActive = tabDetails.activeTab === index;
            const shouldShowSeparator =
              data?.length > 2 && (index + 1) % 2 === 0;
            return (
              <Fragment key={item?.value}>
                <ItemsWrapper
                  showSeparator={
                    showSeprator && shouldShowSeparator && !isActive
                  }
                  separatorColor={sepratorColor}
                  onClick={(event: FormEvent<HTMLDivElement>) =>
                    handleTabChange(event, item, index)
                  }
                  ref={(el) => (tabItemRef.current[index] = el)}
                >
                  {item?.icon && (
                    <Icon
                      type={item?.icon}
                      ml={8}
                      loadSvg
                      color={lightItemIconColor(index)}
                    />
                  )}
                  <Text
                    variant="body"
                    fontWeight="bold"
                    textColor={lightItemTextColor(index)}
                  >
                    {item?.title}
                  </Text>
                </ItemsWrapper>
              </Fragment>
            );
          })}
        </Flex>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default TabBar;
