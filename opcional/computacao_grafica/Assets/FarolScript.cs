using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FarolScript : MonoBehaviour
{
    bool active;
    // Start is called before the first frame update
    void Start()
    {
        active = true;
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyUp(KeyCode.L))
        {
            active = !active;
            gameObject.GetComponent<Light>().enabled = active;
        }
    }
}
