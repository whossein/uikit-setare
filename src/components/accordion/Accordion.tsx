import React, {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useState,
} from "react";
import Flex from "../flex";
import Text from "../text";
import Icon from "../icon";
import { ItemAccordion } from "./Accordion.style";
import { IAccordion } from "./Accordion.types";
import Checkbox from "../checkbox";
import { useSnackBar } from "../snackbar";

const Accordion = forwardRef((props: IAccordion, ref: any) => {
  const {
    elements,
    type = "arrow",
    selectable = false,
    onChange,
    maxSelect,
    noBorder = false,
  } = props;
  const snackbar = useSnackBar();

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

  const countCheckbox = (max: number) => {
    let sum = 0;
    checkedArray.forEach((i) => {
      if (typeof i !== "boolean") {
        sum++;
      }
    });
    if (sum >= max) return true;
    return false;
  };
  const handleCheckbox = (isChecked: boolean, value: any, index: number) => {
    let checkArrayCash = JSON.parse(JSON.stringify(checkedArray));

    if (isChecked && value) checkArrayCash[index] = value;
    else checkArrayCash[index] = isChecked;
    setCheckedArray(checkArrayCash);
  };

  const handleClick = (param: number) => {
    let cashArray = JSON.parse(JSON.stringify(collapse));
    elements.forEach(
      (i, index) =>
        (cashArray[index] =
          param === index ? (cashArray[index] ? false : true) : false)
    );
    setCollapse(cashArray);
  };

  const handleCheckboxEvent = (
    isChecked: boolean,
    value: any,
    index: number
  ) => {
    if (isChecked && maxSelect && countCheckbox(maxSelect)) {
      snackbar({
        message: `بیشتر از ${maxSelect.toString()} ردیف را نمیتوانید انتخاب کنید!`,
      });

      return null;
    } else {
      handleCheckbox(isChecked, value, index);
    }
  };

  useEffect(() => {
    setCollapse([]);
    setCheckedArray([]);
  }, []);

  useEffect(() => {
    let resultArray = JSON.parse(JSON.stringify(checkedArray));
    if (resultArray && onChange) onChange(resultArray);
    //eslint-disable-next-line
  }, [checkedArray]);

  return (
    <Flex flexDirection="column" height="100%">
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
            onClick={() => handleClick(index)}
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
                  onChange={(e) =>
                    handleCheckboxEvent(
                      e.currentTarget.checked,
                      e.currentTarget.value,
                      index
                    )
                  }
                  value={item.value ? item.value : ""}
                />
              )}
              {typeof item.title === "string" ? (
                <Text fontSize={12}>{item.title}</Text>
              ) : (
                <Flex
                  onClick={(e) => {
                    // e.stopPropagation();
                    handleCheckboxEvent(
                      !Boolean(checkedArray[index]),
                      item.value,
                      index
                    );
                  }}
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
