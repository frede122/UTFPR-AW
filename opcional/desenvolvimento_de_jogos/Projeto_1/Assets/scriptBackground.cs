using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class scriptBackground : MonoBehaviour
{
    public GameObject pc;
    public float offsetY = 5;
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        float x = transform.position.x;
        float y = pc.transform.position.y + offsetY;

        Vector2 pos = new Vector2(x, y);

        transform.position = pos;
    }
}
