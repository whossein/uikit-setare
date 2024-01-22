import React, { forwardRef, useCallback, useId, useState } from "react";
import Flex from "../flex";
import Text from "../text";
import Icon from "../icon";
import { ItemAccordion } from "./Accordion.style";
import { IAccordion } from "./Accordion.types";
import Checkbox from "../checkbox";

const Accordion = forwardRef((props: IAccordion, ref) => {
  const {
    elements,
    type = "arrow",
    selectable = false,
    onChange,
    maxSelect,
    noBorder = false,
  } = props;

  const replaceAllWord = (
    str: string,
    find: string,
    replace: string
  ): string => {
    return str.replace(
      new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"),
      replace
    );
  };

  const ID = replaceAllWord(useId(), ":", "");

  const [collapse, setCollapse] = useState<boolean[]>([]);
  const [checkedArray, setCheckedArray] = useState<
    boolean[] | number[] | string[]
  >([]);

  // useImperativeHandle(ref, () => ({
  //   allChecked: (status: boolean) => {
  //     let cash: any[] = [];
  //     elements.forEach((i) => cash.push(status ? i.value : false));
  //     setCheckedArray(cash);
  //   },
  // }));

  const getHeight = useCallback(
    (index: number) => {
      return document.getElementById(`accordion_${ID}_${index}`)?.clientHeight;
    },
    [ID]
  );

  const getHeightHeader = useCallback(
    (index: number): number => {
      let height = document.getElementById(
        `header${ID}_${index}`
      )?.clientHeight;
      if (height) {
        return height;
      } else {
        return 0;
      }
    },
    [ID]
  );

  return (
    <Flex flexDirection="column">
      {elements.map((item, index) => (
        <ItemAccordion
          $noBorder={noBorder}
          $dataHeight={getHeight(index) as number}
          $headerHeight={getHeightHeader(index) as number}
          key={index}
          className={
            collapse[index]
              ? `item open ${type === "plus" ? "plus" : "arrow"} ${
                  checkedArray[index] && selectable && "checked"
                }`
              : `item  ${checkedArray[index] && selectable && "checked"} ${
                  type === "arrow" && "arrow"
                }`
          }
        >
          <Flex
            // onClick={() => handleClick(index)}
            padding="12px 16px"
            width={"100%"}
            alignItems="center"
            justifyContent="space-between"
            id={`header${ID}_${index}`}
            className={`header`}
          >
            <Flex
              width={"100%"}
              alignContent="center"
              justifyContent="flex-start"
            >
              {selectable && (
                <Checkbox
                  margin="0px 0px 0px 8px"
                  checked={Boolean(checkedArray[index])}
                  // onChange={(e) =>
                  //   handleCheckboxEvent(
                  //     e.currentTarget.checked,
                  //     e.currentTarget.value,
                  //     index
                  //   )
                  // }
                  value={item.value ? item.value : ""}
                />
              )}
              {typeof item.title === "string" ? (
                <Text fontSize={12}>{item.title}</Text>
              ) : (
                <Flex
                  // onClick={(e) => {
                  //   e.stopPropagation();
                  //   handleCheckboxEvent(
                  //     !Boolean(checkedArray[index]),
                  //     item.value,
                  //     index
                  //   );
                  // }}
                  fullWidth
                >
                  {item.title}
                </Flex>
              )}
            </Flex>

            <Flex
              margin={"0px 8px 0px 0px"}
              className={collapse[index] ? "close open" : "close"}
              alignContent="center"
              justifyContent="center"
            >
              {type === "plus" ? (
                <div className={"btn"}>
                  <Icon
                    className="iconClose"
                    type={collapse[index] ? "RedClose" : "GreenPlus"}
                    size={12}
                  />
                </div>
              ) : (
                <div>
                  <Icon className="arrow" type="MidDown" size={32} />
                </div>
              )}
            </Flex>
          </Flex>
          <Flex
            id={`accordion_${ID}_${index}`}
            margin="0px 0px 16px 0px"
            width={"100%"}
            className="content"
          >
            {item.element}
          </Flex>
        </ItemAccordion>
      ))}
    </Flex>
  );
});

export default Accordion;
